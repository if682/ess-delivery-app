import { PrismaListsRepository } from "../../repositories/prisma/PrismaListsRepository";
import { ShowMoviesFromListUseCase } from "../movie/show-movies-from-list";

export function makeShowMoviesFromListUseCase(){
    const listsRepository = new PrismaListsRepository();
    const showmoviesfromlistUseCase = new ShowMoviesFromListUseCase(listsRepository);

    return showmoviesfromlistUseCase;
}