export interface IMessage{
    to: string
    subject: string
    body: string 
}

export interface IMailProvider{
    sendMailMessage(message: IMessage) : Promise<boolean>;
}