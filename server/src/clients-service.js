const {Client} = require("./client");
const {DBService} = require("../database/database")

class ClientService {

    constructor() {
        this.clients = new DBService('client');
        this.idCount = 0;
    }

    add(client) {
        if (this.cpfRegistered(client.cpf))
            return null;
        if (this.emailRegistered(client.email))
            return null;
        if (this.phoneRegistered(client.phone))
            return null;

        var newClient = new Client({
            id: this.idCount,
            name: client.name,
            cpf: client.cpf,
            phone: client.phone,
            email: client.email,
            password: client.password
        });
        this.clients.add(newClient);

        this.idCount++;
        return newClient;
    }

    update(client) {
        var data = this.clients.getData().find(({ id }) => id == client.id);
        if (data){
            var index = this.clients.getData().indexOf(data);
            this.clients.update(index, client);
            return client;
        }
        return null;
    }

    delete(clientId) {
        var data = this.clients.getData().find(({ id }) => id == clientId);
        if (data){
            var index = this.clients.getData().indexOf(data);
            this.clients.delete(index);
            return clientId;
        }
        return null;
    }

    authenticate(email, password) {
        var result = this.clients.getData().find(c => c.email === email);
        if (result && result.password === password) {
            return true;
        }
        return false;
    }

    get() {
        return this.clients.getData();
    }

    getById(clientId) {
        return this.clients.getData().find(({ id }) => id == clientId);
    }

    cpfRegistered(cpf) {
        return this.clients.getData().find(c => c.cpf === cpf) ? true : false;
    }

    emailRegistered(email) {
        return this.clients.getData().find(c => c.email === email) ? true : false;
    }

    phoneRegistered(phone) {
        return this.clients.getData().find(c => c.phone === phone) ? true : false;
    }
}
exports.ClientService = ClientService;