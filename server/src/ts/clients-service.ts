import { Client } from "./client";


export class ClientService {
  clients: Client[] = [];
  idCount: number = 0;
  
  add(client: Client): Client {
    if (this.cpfRegistered(client.cpf)) return null;
    if (this.emailRegistered(client.email)) return null;
    if (this.phoneRegistered(client.phone)) return null;

    var newClient = new Client(<Client> { id: this.idCount, ...client });
    this.clients.push(newClient);
    this.idCount++;
    return newClient;
  }

  update(client: Client) : Client {
    var result : Client = this.clients.find(c => c.id === client.id);
    if (result) result.update(client);
    return result;
  }

  delete(clientId: number): any {
    var client = this.getById(clientId);
    if (client){
      var index = this.clients.indexOf(client);
      this.clients.splice(index, 1);
      return clientId;
    }

    return null;
  }

  authenticate(email: string, password: string) {
    var result : Client = this.clients.find(c => c.email === email);
    if (result && result.password === password) {
      return true;
    }

    return false;
  }

  get() : Client[] {
    return this.clients;
  }
  
  getById(clientId: number) : Client {
    return this.clients.find(({ id }) => id == clientId);
  }

  cpfRegistered(cpf: string): boolean {
    return this.clients.find(c => c.cpf === cpf) ? true : false;
  }

  emailRegistered(email: string): boolean {
    return this.clients.find(c => c.email === email) ? true : false;
  }

  phoneRegistered(phone: string): boolean {
    return this.clients.find(c => c.phone === phone) ? true : false;
  }

  
}
