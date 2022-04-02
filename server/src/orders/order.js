class Order {
    constructor(order) {
        this.id = order.id;
        this.clientId = order.clientId;
        this.address = order.address;
        this.items = order.items; // [ {qt: 3, description: sorvete, price: 13.00} ]
        this.cost = order.cost;
        this.deliveryTax = order.deliveryTax;
    }
}
exports.Order = Order;