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
        const regex = /[@&%$]/;
        name = name.trim(); // tira espaços da frente e de trás
        name = name.replace(/\s+/g, ' '); // troca 2 ou mais espaços juntos por um só

        if(!name || name.length > 80 || regex.test(name)){
            throw new Error('Invalid name');
        }

        const found = await this.listsRepository.findList(userId, name);

        if(found){
            throw new Error('This list already exists')
        }

        const list = await this.listsRepository.createList(name, userId);

        return {
            list
        }
    }
}