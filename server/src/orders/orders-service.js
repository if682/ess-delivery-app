const {Order} = require("./order");
const {DBService} = require("../../database/database");

var nodemailer = require('nodemailer');
const { isTaggedTemplateExpression } = require("typescript");
const COMPANY_EMAIL = 'fomiauu@gmail.com';
const COMPANY_PASSWORD = 'mgot qlcj oojz krvp';
const ordersPerPage = 3;

class OrderService {

    constructor() {
        this.orders = new DBService('orders');
        this.idCount = this.orders.getIdCount();
    }

    get(page, filters) {
        var start = new Date(filters.start);
        var end = new Date(filters.end);
        var data = this.orders.getData().filter(item => {
            var itemDate = new Date(item.created_at);
            if (itemDate >= start && itemDate <= end) return true;
            return false;
        });
        return this.getByPage(data, page);
    }

    getByClientId(client_id, page, filters) {
        var start = new Date(filters.start);
        var end = new Date(filters.end);
        var data = this.orders.getData().filter(item => {
            var itemDate = new Date(item.created_at);
            if (item.clientId == client_id && itemDate >= start && itemDate <= end) return true;
            return false;
        });
        return this.getByPage(data, page);
    }

    getByRestaurantId(restaurant_id, page, filters) {
        var start = new Date(filters.start);
        var end = new Date(filters.end);
        var data = this.orders.getData().filter(item => {
            var itemDate = new Date(item.created_at);
            if (item.restaurantId == restaurant_id && itemDate >= start && itemDate <= end) return true;
            return false;
        });
        return this.getByPage(data, page);
    }

    getByPage(data, page) {
        if (page < 1 || ordersPerPage*(page-1) > data.length) return [];
        
        if (ordersPerPage >= data.length - ordersPerPage*(page-1)) {
            return data.slice(ordersPerPage*(page-1))
        };
        return data.slice(ordersPerPage*(page-1), ordersPerPage);
    }

    getTotalOrders(client_id) {
        var data = this.orders.getData().filter(({clientId}) => clientId == client_id);
        return data.length;
    }

    add(order) {
        var date = new Date();
        date.setTime( date.getTime() - date.getTimezoneOffset()*60*1000 );
        var newOrder = new Order({
            id: this.idCount,
            clientId: order.clientId,
            restaurantId: order.restaurantId,
            address: order.address, 
            items: order.items, 
            cost: order.cost,
            deliveryTax: order.deliveryTax,
            created_at: date
        });
        this.orders.add(newOrder);

        this.idCount++;
        return newOrder;
    }

    delete(orderId) {
        var data = this.orders.getData().find(({ id }) => id == orderId);
        if (data){
            var index = this.orders.getData().indexOf(data);
            this.orders.delete(index);
            return orderId;
        }
        return null;
    }

    getAnalytics(client_id, filters) {
        var start = new Date(filters.start);
        var end = new Date(filters.end);
        var data = this.orders.getData().filter(item => {
            var itemDate = new Date(item.created_at);
            if (item.clientId == client_id && itemDate >= start && itemDate <= end) return true;
            return false;
        });

        var result = this.getAnalyticsData(data);      

        result.most_request.restaurant = this.organizeAnalyticsData(result.most_request.restaurant);
        result.most_expensive.restaurant = this.organizeAnalyticsData(result.most_expensive.restaurant);
        result.most_request.food = this.organizeAnalyticsData(result.most_request.food);
        result.most_expensive.food = this.organizeAnalyticsData(result.most_expensive.food);

        result.most_request.total_restaurant = this.getAnalyticsTotalValue(result.most_request.restaurant);
        result.most_expensive.total_restaurant = this.getAnalyticsTotalValue(result.most_expensive.restaurant);
        result.most_request.total_food = this.getAnalyticsTotalValue(result.most_request.food);
        result.most_expensive.total_food = this.getAnalyticsTotalValue(result.most_expensive.food); 

        return result;
    }

    getAnalyticsData(data) {
        var result = {
            most_request: {
              food: [],
              total_food: 0,
              restaurant: [],
              total_restaurant: 0
            },
            most_expensive: {
                food: [],
                total_food: 0.00,
                restaurant: [],
                total_restaurant: 0.00
              }
        };
        for (let order of data) {
            result.most_request.restaurant.push({
                name: order.restaurantId,
                total: 1
            });
            result.most_expensive.restaurant.push({
                name: order.restaurantId,
                total: order.cost
            });

            for (let item of order.items) {
                result.most_request.food.push({
                    name: item.description,
                    total: item.qt
                });
                result.most_expensive.food.push({
                    name: item.description,
                    total: item.price
                });
            }
        }
        return result;
    }

    organizeAnalyticsData(data) {
        var dicAux = {};
        data.map(item => {
            if (dicAux[item.name]) {
                dicAux[item.name] += item.total;
            } else {
                dicAux[item.name] = item.total;
            }
        });
        var arrayAux = [];
        for (let key in dicAux) {
            arrayAux.push({ name: key, total: dicAux[key] });
        }
        arrayAux = arrayAux.sort((a, b) => (a.total > b.total) ? -1 : ((a.total === b.total) ? ((a.name > b.name) ? 1 : -1) : 1) );
        
        var result = [], aux = 0;
        arrayAux.map(item => {
            if (aux < 3) result.push(item);
            else if (aux === 3) {
                result.push({
                    name: 'others',
                    total: item.total
                });
            } else {
                result[3].total += item.total;
            }
            aux++;
        });

        return result;
    }

    getAnalyticsTotalValue(data) {
        return data.reduce((previousValue, currentValue) => previousValue + currentValue.total, 0);
    }

    printResult(result, num) {
        console.log('--------------------');
        console.log('result' + num + ':');
        console.log('{');
        console.log('  most_request: {');
        console.log('    food: [');
        for (let i of result.most_request.food) {
            console.log('      name: ' + i.name);
            console.log('      total: ' + i.total);
        }
        console.log('    ],');
        console.log('    total_food: ' + result.most_request.total_food + ',');
        console.log('    restaurant: [');
        for (let i of result.most_request.restaurant) {
            console.log('      name: ' + i.name);
            console.log('      total: ' + i.total);
        }
        console.log('    ],');
        console.log('    total_restaurant: ' + result.most_request.total_restaurant + ',');
        console.log('  }');
        console.log('  most_expensive: {');
        console.log('    food: [');
        for (let i of result.most_expensive.food) {
            console.log('      name: ' + i.name);
            console.log('      total: ' + i.total);
        }
        console.log('    ],');
        console.log('    total_food: ' + result.most_expensive.total_food + ',');
        console.log('    restaurant: [');
        for (let i of result.most_expensive.restaurant) {
            console.log('      name: ' + i.name);
            console.log('      total: ' + i.total);
        }
        console.log('    ],');
        console.log('    total_restaurant: ' + result.most_expensive.total_restaurant + ',');
        console.log('  }');
        console.log('}');
        console.log('--------------------\n\n'); 
    }

    
}
exports.OrderService = OrderService;