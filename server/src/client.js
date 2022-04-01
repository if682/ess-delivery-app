class Client {
    constructor(client) {
        this.id = client.id;
        this.name = client.name;
        this.cpf = client.cpf;
        this.phone = client.phone;
        this.email = client.email;
        this.password = client.password;
        this.pay_method = "";
        this.addresses = [];
        this.requests = [];
    }
    update(client) {
        this.name = client.name;
        this.cpf = client.cpf;
        this.phone = client.phone;
        this.email = client.email;
        this.password = client.password;
        this.pay_method = client.pay_method;
        this.addresses = client.addresses;
    }
}
exports.Client = Client;