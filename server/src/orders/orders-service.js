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

    
}
exports.OrderService = OrderService;