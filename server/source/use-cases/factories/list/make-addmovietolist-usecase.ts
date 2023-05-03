import { PrismaListsRepository } from "../../../repositories/prisma/PrismaListsRepository";
import { PrismaMoviesRepository } from "../../../repositories/prisma/PrismaMoviesRepository";
import { AddMovieToListUseCase } from "../../list/add-movie-to-list";

export function makeAddMovieToListUseCase(){
    const listsRepository = new PrismaListsRepository();
    const moviesRepository = new PrismaMoviesRepository();
    const addmovietolistUseCase = new AddMovieToListUseCase(listsRepository, moviesRepository);

    return addmovietolistUseCase;
}