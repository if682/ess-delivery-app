import { List } from "@prisma/client";
import { IListsRepository } from "../../repositories/IListsRepository";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IShowListsUseCaseRequest{
    userId: string
}

interface IShowListsUseCaseReply{
    lists: List[]
}

export class ShowListsUseCase{
    constructor(
        private listsRepository: IListsRepository,
        private usersRepository: IUserRepository
        ){}

    async handle({
        userId
    }: IShowListsUseCaseRequest): Promise<IShowListsUseCaseReply>{
        const foundUser = await this.usersRepository.findById(userId);
        if(!foundUser){
            throw new Error('Not Found');
        }
        const lists = await this.listsRepository.showLists(userId);

        return {
            lists
        };
    }
}