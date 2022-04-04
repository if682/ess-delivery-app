class Order {
    constructor(order) {
        this.id = order.id;
        this.clientId = order.clientId;
        this.restaurantId = order.restaurantId;
        this.address = order.address; 
        // { postal_code: 11111-111, address: Rua Paraiso,   
        //   district: Bairro Feliz, city: Jaboatão,
        //   state: PE, complement: Apt 201 }
        this.items = order.items; 
        // [ {qt: 3, description: sorvete, price: 13.00} ]
        this.cost = order.cost;
        this.deliveryTax = order.deliveryTax;
        this.created_at = order.created_at;
    }
}
exports.Order = Order;