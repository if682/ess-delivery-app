import { User } from "@prisma/client"
import { IUserRepository } from "../../repositories/IUsersRepository"
import { compare } from "bcryptjs"

interface IAuthenticateUserUseCaseRequest {
    username: string
    password: string
}

interface IAuthenticateUserUseCaseReply {
    user: User
}

export class AuthenticateUserUseCase {
    constructor(private usersRepository: IUserRepository) {}

    async handle({
        username,
        password,
    }: IAuthenticateUserUseCaseRequest): Promise<IAuthenticateUserUseCaseReply> {
        const user = await this.usersRepository.findByUsername(username);

        if(!user) {
            throw new Error("Bad request.");
        }

        const passwordIsMatch = await compare(password, user.password);

        if (!passwordIsMatch) {
            throw new Error("Unauthorized access.")
        }

        return {
            user,
        }
    }
}