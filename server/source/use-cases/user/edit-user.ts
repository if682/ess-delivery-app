import { User } from "@prisma/client";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { hash } from "bcryptjs";
import { isValidPassword } from "../../utils/checkpassword";

interface IEditUserUseCaseRequest {
    name: string
    username: string
    email: string
    password: string
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
        username,
        birthdate,
        password,
        location,
        phone,
    }: IEditUserUseCaseRequest): Promise<IEditUserUseCaseReply> {

        if (!isValidPassword(password)) {
            throw new Error("Unvalid Password.");
        }

        const password_hash = await hash(password, 6);

        const user = await this.usersRepository.findByUsername(username);

        if (!user) {
            throw new Error("Bad request.");
        }

        user.name = name;
        user.email = email;
        user.username = username;
        user.birthdate = birthdate;
        user.password = password_hash;
        user.location = location;
        user.phone = phone;

        await this.usersRepository.save(user);

        return {
            user,
        }
    }
}