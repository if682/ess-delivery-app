import { User } from "@prisma/client";
import { IUserRepository } from "../repositories/IUsersRepository";
import { hash } from "bcryptjs";
import { isValidPassword } from "../utils/checkpassword";

interface IEditUserUseCase {
    user: User
}

interface IRegisterUserUseCaseReply {
    user: User
}

export class RegisterUserUseCase {
    constructor(private usersRepository: IUserRepository) {}

    async handle({
        user
    }: IEditUserUseCase): Promise<IRegisterUserUseCaseReply> {

        if(!isValidPassword(user.password)){
            throw new Error("Unvalid Password.");
        }

        else{
            const password_hash = await hash(user.password, 6);

            const editedUser: User = {
                id: user.id,
                birthdate: user.birthdate,
                email: user.email,
                location: user.location,
                name: user.name,
                password: password_hash,
                passwordResetToken: user.passwordResetToken,
                phone: user.phone,
                resetTokenExpires: user.resetTokenExpires,
                role: user.role,
                username: user.username,
            }

            user = await this.usersRepository.save(editedUser);
        }
        

        return {
            user,
        }
    }
}