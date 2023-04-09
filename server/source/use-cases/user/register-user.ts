import { User } from "@prisma/client";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { hash } from "bcryptjs";
import { isValidPassword } from "../../utils/checkpassword";
import { IListsRepository } from "../../repositories/IListsRepository";

interface IRegisterUserUseCaseRequest {
    name: string
    username: string
    email: string
    password: string
    birthdate: Date
    phone: string | null
    location: string | null
}

interface IRegisterUserUseCaseReply {
    user: User
}

export class RegisterUserUseCase {
    constructor(
        private usersRepository: IUserRepository,
        private listsRepository: IListsRepository) {}

    async handle({
        name,
        email,
        username,
        birthdate,
        password,
        location,
        phone,
    }: IRegisterUserUseCaseRequest): Promise<IRegisterUserUseCaseReply> {
        var user;
        if(!isValidPassword(password)){
            throw new Error("Invalid Password.");
        }
        else{
            const password_hash = await hash(password, 6);

            user = await this.usersRepository.create({
                name,
                email,
                username,
                birthdate,
                password: password_hash,
                location,
                phone,
            })

            await this.listsRepository.createList("Historico", user.id);
            await this.listsRepository.createList("Curtidos", user.id);
        }
        

        return {
            user,
        }
    }
}