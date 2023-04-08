import { IListsRepository } from "../repositories/IListsRepository";


interface IShowMoviesFromListUseCaseRequest{
    userId: string,
    listName: string,
}

interface IShowMoviesFromListUseCaseReply{
    moviesId: string[]
}

export class ShowMoviesFromListUseCase{
    constructor(private listsRepository: IListsRepository){}

    async handle({
        userId,
        listName
    }: IShowMoviesFromListUseCaseRequest): Promise<IShowMoviesFromListUseCaseReply>{
        const moviesId = await this.listsRepository.showMoviesFromList(userId, listName);

        return{
            moviesId
        }
    }
}