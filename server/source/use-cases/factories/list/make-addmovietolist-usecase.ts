import { PrismaListsRepository } from "../../../repositories/prisma/PrismaListsRepository";
import { AddMovieToListUseCase } from "../../list/add-movie-to-list";

export function makeAddMovieToListUseCase(){
    const listsRepository = new PrismaListsRepository();
    const addmovietolistUseCase = new AddMovieToListUseCase(listsRepository);

    return addmovietolistUseCase;
}