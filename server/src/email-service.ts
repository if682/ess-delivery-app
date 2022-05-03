import nodemailer = require("nodemailer")

export class EmailService {
  private transport: any;

  constructor() {
    this.transport = nodemailer.createTransport({
      host: process.env.MAILHOG_HOST,
      port: 1025,
      auth: null
    });
  }

  sendNewOrder(newOrder: any) {
    const confParams = this.getLinkParameters(newOrder, "Confirmação")
    const cancelParams = this.getLinkParameters(newOrder, "Cancelamento")

    this.transport.sendMail({
      from: `${newOrder.nome} <${newOrder.email}>`,
      to: `${newOrder.restaurante} <${newOrder.restEmail}>`,
      subject: `Novo Pedido - #${newOrder.id}`,
      html: `<h1>Novo Pedido</h1>
             <h2>Produto: ${newOrder.produto}</h2>
             <h2>Quantidade: ${newOrder.quantidade}</h2>
             <a href="http://localhost:3000/pedido/notificacao?${confParams}">Confirmar Pedido</a>
             <a href="http://localhost:3000/pedido/notificacao?${cancelParams}">Cancelar Pedido</a>
             `
    })
  }
  
  sendNotification(order: any, msg: string) {
    this.transport.sendMail({
      from: `${order.restName} <${order.restEmail}>`,
      to: `${order.userName} <${order.userEmail}>`,
      subject: `${order.msg} do Pedido - #${order.id}`,
      html: `<h2>${msg}</h2>`
    });
  }

  private getLinkParameters(order: any, msg:string ) {
    return `id=${order.id}&userName=${order.nome}&userEmail=${order.email}&restName=${order.restaurante}&restEmail=${order.restEmail}&msg=${msg}`
  }
}