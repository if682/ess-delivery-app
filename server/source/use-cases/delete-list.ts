import { List } from "@prisma/client";
import { IListsRepository } from "../repositories/IListsRepository";

interface IDeleteListUseCaseRequest{
    userId: string,
    listName: string
}

export class DeleteListUseCase{
    constructor(private listsRepository: IListsRepository){}

    async handle({
        userId,
        listName
    }: IDeleteListUseCaseRequest): Promise<void>{
        await this.listsRepository.deleteList(userId, listName);
    }
}