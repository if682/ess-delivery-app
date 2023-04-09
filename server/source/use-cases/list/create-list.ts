import { List, User } from "@prisma/client";
import { IListsRepository } from "../../repositories/IListsRepository";

interface ICreateListUseCaseRequest{
    name: string,
    userId: string
}

interface ICreateListUseCaseReply{
    list: List
}

export class CreateListUseCase{
    constructor(private listsRepository: IListsRepository){}

    async handle({
        name,
        userId
    }: ICreateListUseCaseRequest): Promise<ICreateListUseCaseReply>{

        const list = await this.listsRepository.createList(name, userId);

        return {
            list
        }
    }
}