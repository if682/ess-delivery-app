const {Order} = require("./order");
const {DBService} = require("../../database/database");

var nodemailer = require('nodemailer');
const COMPANY_EMAIL = 'fomiauu@gmail.com';
const COMPANY_PASSWORD = 'mgot qlcj oojz krvp';

class OrderService {

    constructor() {
        this.orders = new DBService('orders');
        this.idCount = this.orders.getIdCount();
    }

    getByClientId(client_id) {
        return this.orders.getData().filter(({clientId}) => clientId == client_id);
    }

    getByRestaurantId(restaurant_id) {
        return this.orders.getData().filter(({restaurantId}) => restaurantId == restaurant_id);
    }

    
}
exports.OrderService = OrderService;