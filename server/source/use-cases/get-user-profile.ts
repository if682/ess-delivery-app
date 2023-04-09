import { User } from "@prisma/client"
import { IUserRepository } from "../repositories/IUsersRepository"

interface IGetUserProfileUseCaseRequest {
    id: string
}

interface IGetUserProfileUseCaseReply {
    user: User
}

export class GetUserProfileUseCase {
    constructor(private usersRepository: IUserRepository) {}

    async handle({
        id,
    }: IGetUserProfileUseCaseRequest): Promise<IGetUserProfileUseCaseReply> {
        const user = await this.usersRepository.findById(id);

        if(!user) {
            throw new Error("Bad request.");
        }

        return {
            user,
        }
    }
}

