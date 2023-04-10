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

        const list = await this.listsRepository.findList(userId, listName);

        if(!list){
            throw new Error('Invalid')
        }

        const movie = await this.listsRepository.movieInList(movieId, userId, list.name);
        
        if(!movie){
            throw new Error('Invalid')
        }


        await this.listsRepository.deleteMovieFromList(userId, list.name, movieId);
    }
}