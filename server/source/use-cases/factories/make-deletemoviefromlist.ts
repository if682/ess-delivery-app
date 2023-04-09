import { PrismaListsRepository } from "../../repositories/prisma/PrismaListsRepository";
import { DeleteMovieFromListUseCase } from "../delete-movie-from-list";

export function makeDeleteMovieFromListUseCase(){
    const listsRepository = new PrismaListsRepository();
    const deleteMovieFromListUseCase = new DeleteMovieFromListUseCase(listsRepository);

    return deleteMovieFromListUseCase;
}