const {Client} = require("./client");
const {DBService} = require("../database/database");

var nodemailer = require('nodemailer');
const COMPANY_EMAIL = 'fomiauu@gmail.com';
const COMPANY_PASSWORD = 'mgot qlcj oojz krvp';

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

    getByEmail(clientEmail) {
        return this.clients.getData().find(({ email }) => email == clientEmail);
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

    forgotPassword(email) {
        var data = this.getByEmail(email);
        if (data) {
            return this.sendEmail({
                email: data.email,
                subject: 'Redefina sua senha agora',
                text: '--- link para redefinir a senha ---'
            });
        }

        return null;
    }

    async sendEmail(body) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: COMPANY_EMAIL,
              pass: COMPANY_PASSWORD
            }
        });
          
        var mailOptions = {
            from: COMPANY_EMAIL,
            to: body.email,
            subject: body.subject,
            text: body.text
        };
          
        await transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                return false;
            } else {
                console.log('Email sent: ' + info.response);
                return true;
            }
        });
    }
}
exports.ClientService = ClientService;