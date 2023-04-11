import { User } from "@prisma/client";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { hash } from "bcryptjs";
import { isValidPassword } from "../../utils/checkpassword";

interface IEditUserUseCaseRequest {
    name: string
    username: string
    email: string
    description: string
    birthdate: Date
    phone: string | null
    location: string | null
}

interface IEditUserUseCaseReply {
    user: User
}

export class EditUserUserUseCase {
    constructor(private usersRepository: IUserRepository) { }

    async handle({
        name,
        email,
        description,
        username,
        birthdate,
        location,
        phone,
    }: IEditUserUseCaseRequest): Promise<IEditUserUseCaseReply> {

        const user = await this.usersRepository.findByUsername(username);

        if (!user) {
            throw new Error("Bad request.");
        }

        user.name = name;
        user.email = email;
        user.description = description;
        user.username = username;
        user.birthdate = birthdate;
        user.location = location;
        user.phone = phone;

        await this.usersRepository.save(user);

        return {
            user,
        }
    }
}