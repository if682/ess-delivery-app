import { List } from "@prisma/client";
import { IListsRepository } from "../repositories/IListsRepository";

interface IShowListsUseCaseRequest{
    userId: string
}

interface IShowListsUseCaseReply{
    lists: List[]
}

export class ShowListsUseCase{
    constructor(private listsRepository: IListsRepository){}

    async handle({
        userId
    }: IShowListsUseCaseRequest): Promise<IShowListsUseCaseReply>{
        const lists = await this.listsRepository.showLists(userId);

        return {
            lists
        };
    }
}