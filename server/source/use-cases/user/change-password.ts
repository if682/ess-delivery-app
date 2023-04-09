import { User } from "@prisma/client";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { isValidPassword } from "../../utils/checkpassword";
import { hash, compare } from "bcryptjs";

interface IChangePasswordUseCaseRequest{
    email: string,
    token: string,
    newPassword: string,
    repeatNewPassword: string
}

interface IChangePasswordUseCaseReply{
    user: User  
}

export class ChangePasswordUseCase{
    constructor(private usersRepository : IUserRepository) {}

    async handle({
        email,
        token,
        newPassword,
        repeatNewPassword
    }: IChangePasswordUseCaseRequest): Promise<IChangePasswordUseCaseReply> {
    
        // usuário não preencheu algum campo
        if(!email || !token || !newPassword || !repeatNewPassword){
            throw new Error("No field should be left empty.")
        }
        const user = await this.usersRepository.findByEmail(email);

        // usuário não existe ou não gerou um token
        if(!user || !user.passwordResetToken || !user.resetTokenExpires){ 
            throw new Error("Invalid.")
        }
        const registeredToken = user.passwordResetToken;
        const expireDate: Date = new Date(user.resetTokenExpires);

        const equalToken = compare(registeredToken, token);
        const equalPassword = compare(newPassword, repeatNewPassword);
        
        // token já expirou ou token é diferente do registrado ou senhas são diferentes
        if(expireDate.getTime() < Date.now() || !equalToken || !equalPassword){
            throw new Error("Invalid.")
        }
        
        // senha não segue todas as regras
        if(!isValidPassword(newPassword)){
            throw new Error("Invalid.")
        }

        // se chegou até aqui, então atualiza senha do usuário
        const changedPassword = await hash(newPassword, 6);
        this.usersRepository.changePassword(user.id, changedPassword);

        return {
            user,
        }
        
    }
}

