const {Client} = require("./client");

class ClientService {

    constructor() {
        this.clients = [];
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
        this.clients.push(newClient);
        this.idCount++;
        return newClient;
    }

    update(client) {
        var result = this.clients.find(c => c.id === client.id);
        if (result)
            result.update(client);

        return result;
    }

    delete(clientId) {
        var client = this.getById(clientId);
        if (client) {
            var index = this.clients.indexOf(client);
            this.clients.splice(index, 1);
            return clientId;
        }
        return null;
    }

    authenticate(email, password) {
        var result = this.clients.find(c => c.email === email);
        if (result && result.password === password) {
            return true;
        }
        return false;
    }

    get() {
        return this.clients;
    }

    getById(clientId) {
        return this.clients.find(({ id }) => id == clientId);
    }

    cpfRegistered(cpf) {
        return this.clients.find(c => c.cpf === cpf) ? true : false;
    }

    emailRegistered(email) {
        return this.clients.find(c => c.email === email) ? true : false;
    }

    phoneRegistered(phone) {
        return this.clients.find(c => c.phone === phone) ? true : false;
    }
}
exports.ClientService = ClientService;