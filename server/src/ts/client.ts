export class Client {
  id: number;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
  pay_method: string;
  addresses: string[];
  orders: string[];

  constructor(client: Client) {
    this.id = client.id;
    this.name = client.name;
    this.cpf = client.cpf;
    this.phone = client.phone;
    this.email = client.email;
    this.password = client.password;
    this.pay_method = "";
    this.addresses = [];
    this.orders = [];
  }

  update(client: Client): void {
    this.name = client.name;
    this.cpf = client.cpf;
    this.phone = client.phone;
    this.email = client.email;
    this.password = client.password;
    this.pay_method = client.pay_method;
    this.addresses = client.addresses;
  }
}