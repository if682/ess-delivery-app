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
    console.log(this.clients);
    var result : Client = this.clients.find(c => c.id === client.id);
    if (result) result.update(client);
    return result;
  }

  delete(clientId: number): any {
    if (this.getById(clientId)){
      this.clients = this.clients.filter(c => c.id !== clientId);
      return clientId;
    }

    return null;
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
