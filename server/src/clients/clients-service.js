const {Client} = require("./client");
const {DBService} = require("../../database/database");
var crypto = require("crypto");


var nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');
const COMPANY_EMAIL = 'fomiauu@gmail.com';
const COMPANY_PASSWORD = 'mgot qlcj oojz krvp';

class ClientService {

    constructor() {
        this.clients = new DBService('clients');
        this.idCount = this.clients.getIdCount();
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

    add(client) {
        if (this.cpfRegistered(client.cpf))
            return "cpf";
        if (this.emailRegistered(client.email))
            return "email";
        if (this.phoneRegistered(client.phone))
            return "phone";

        var checkCode = crypto.randomBytes(3).toString('hex');
        var newClient = new Client({
            id: this.idCount,
            name: client.name,
            cpf: client.cpf,
            phone: client.phone,
            email: client.email,
            password: client.password,
            code: checkCode,
            validPhone: false
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

    updateValidNumberStatus(clientID, code) {
        var data = this.clients.getData().find(({ id }) => id == clientID);

        if (data.code === code){
            data.validPhone = true;
            var index = this.clients.getData().indexOf(data);
            this.clients.update(index, data);
            return data;
        }else if(data.code !== code){
            return data;

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
        var client = this.getByEmail(email);
        if (client && client.password === password) return true;
        return false;
    }

    checkPassword(clientId, password) {
        var client = this.getById(clientId);
        if (client && client.password === password) return true;
        return false;
    }

    forgotPassword(email) {
        var data = this.getByEmail(email);
        if (data) {
            return this.sendEmail({
                email: data.email,
                subject: 'foMiau | Redefina sua senha agora',
                id: data.id
            });
        }

        return null;
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

    async sendEmail(body) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: COMPANY_EMAIL,
              pass: COMPANY_PASSWORD
            }
        });

        transporter.use('compile', hbs({
			viewEngine: {
				extname: '.handlebars',
				defaultLayout: 'template_email',
				layoutsDir: path.join(__dirname, 'email-assets')
			},
			viewPath: path.join(__dirname, 'email-assets')
		}));
          
        var mailOptions = {
            from: COMPANY_EMAIL,
            to: body.email,
            subject: body.subject,
            template: 'template_email',
            context: {                  // <=
                id: body.id
            }
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