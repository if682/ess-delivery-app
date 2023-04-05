import { User } from "@prisma/client";
import { IUserRepository } from "../repositories/IUsersRepository";
import { IMailProvider } from "../services/IMailProvider";
import { randomBytes } from "crypto";

interface IForgotPasswordUseCaseRequest{
    email: string
}

interface IForgotPasswordUseCaseReply{
    user: User  
}

export class ForgotPasswordUseCase{
    constructor(
        private usersRepository : IUserRepository,
        private mailProvider : IMailProvider
        ) {}

    async handle({
        email,
    }: IForgotPasswordUseCaseRequest): Promise<IForgotPasswordUseCaseReply> {
        const user = await this.usersRepository.findByEmail(email);
        if(!user){
            throw new Error("Not Found.")
        }
        else{
            const now = new Date();
            const newDate = new Date(now.getTime() + 5 * 60000); // 5 minutos depois
            
            const token = randomBytes(20).toString('hex');
            await this.usersRepository.updateResetToken(user.id, newDate, token);

            this.mailProvider.sendMailMessage({
                to: user.email,
                subject: "Redefinição de Senha",
                body: `Olá, ${user.name}\n\n Utilize o código ${token} no LINK para trocar a sua senha.`,
            })
        }
        
        return {
            user,
        }
        
    }
}

