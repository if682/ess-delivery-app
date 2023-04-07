import { PrismaListsRepository } from "../../repositories/prisma/PrismaListsRepository";
import { ShowListsUseCase } from "../show-lists";

export async function makeShowListsUseCase(){
    const listsRepository = new PrismaListsRepository();
    const showlistsUseCase = new ShowListsUseCase(listsRepository);

    return showlistsUseCase;
}