import { List } from "@prisma/client";
import { IListsRepository } from "../../repositories/IListsRepository";

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

        const foundList = await this.listsRepository.findList(userId, listName);
        if(!foundList){
            throw new Error('Not Found')
        }
        console.log(foundList.name);

        await this.listsRepository.deleteList(userId, foundList.name);
    }
}