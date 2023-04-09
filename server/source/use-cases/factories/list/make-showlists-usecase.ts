import { PrismaListsRepository } from "../../../repositories/prisma/PrismaListsRepository";
import { ShowListsUseCase } from "../../list/show-lists";

export function makeShowListsUseCase(){
    const listsRepository = new PrismaListsRepository();
    const showlistsUseCase = new ShowListsUseCase(listsRepository);

    return showlistsUseCase;
}