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

    get(id) {
        return this.orders.getData().filter(({clientId}) => clientId == id);
    }

    
}
exports.OrderService = OrderService;