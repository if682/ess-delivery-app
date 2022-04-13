import { users, User , Order} from "../users";

import crypto = require('crypto');
import * as fs from 'fs';
// ainda tem que fazer tudo.
export class userService {
  users: User[] = [];
  
  add(user: User): User {
    const idCount = crypto.randomBytes(4).toString('HEX'); 
    //serve para ele gerar 4 bytes de caracteres aleatórios e depois transformar tudo em uma sting no formato hexadecimal

    const newOrder = new Order(<Order> { id: idCount, ...order });
    // if (newuser.price <= 0) {
    //   throw Error("Price can't equal or less than zero")
    // }
    console.log(newuser);

    this.users.push(newuser);
    return newuser;
  
  }
  
  getById(userId: string) : user {
    return this.users.find(({ id }) => id == userId);
  }

  update(userId: string, user: user) : user {
    var result: user = this.getById(userId);
    var userIndex = this.users.findIndex((result) => result.id == userId); // retorna o índice do cupom no array

    if (result) {
      this.users[userIndex] = <user> { 
        ...this.users[userIndex],  // preserva tudo que já tem no cupom 
        ...user                      // altera apenas o que é necessário
      }      
    }

    return result;
  }

  get() : user[] {
    return this.users;
  }

  delete(userId: string) : user {
    var result: user = this.getById(userId);
    var userIndex = this.users.findIndex((result) => result.id == userId);
    
    if (result) {
      this.users.splice(userIndex, 1);
    }
    return result;
  }

  updateFile(fileName: string){
    fs.writeFile(fileName, JSON.stringify(this.users), (err) => {
      if(err){
        console.log(err);
      }else{
        console.log(`Arquivo ${fileName} atualizado!`);
      }
    })
  }
  
}
