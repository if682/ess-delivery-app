import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";


export class MailProvider implements IMailProvider{
    async sendMailMessage(message: IMessage): Promise<boolean> {
        var transport = nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "342f12bbfa9e7f",
            pass: "cf08466953f576"
          }
        });
        
          
        var mailmessage = {
            from: "letterbox@cin.ufpe.br",
            to: message.to,
            subject: message.subject,
            text: message.body ,
          };
          
          try {
            await transport.sendMail(mailmessage);
            return true;
          } catch (err) {
            console.error(err);
            return false;
          }

        
    }
}