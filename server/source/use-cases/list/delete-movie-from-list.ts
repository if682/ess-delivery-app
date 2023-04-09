import { IListsRepository } from "../../repositories/IListsRepository";

interface IDeleteMovieFromListUseCaseRequest{
    userId: string,
    listName: string,
    movieId: string
}

export class DeleteMovieFromListUseCase{
    constructor(private listsRepository: IListsRepository){}

    async handle({
        userId,
        listName,
        movieId
    }: IDeleteMovieFromListUseCaseRequest): Promise<void>{
        await this.listsRepository.deleteMovieFromList(userId, listName, movieId);
    }
}