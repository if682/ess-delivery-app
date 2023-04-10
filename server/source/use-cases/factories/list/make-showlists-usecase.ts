import { PrismaListsRepository } from "../../../repositories/prisma/PrismaListsRepository";
import { PrismaUsersRepository } from "../../../repositories/prisma/PrismaUsersRepository";
import { ShowListsUseCase } from "../../list/show-lists";

export function makeShowListsUseCase(){
    const listsRepository = new PrismaListsRepository();
    const usersRepository = new PrismaUsersRepository();
    const showlistsUseCase = new ShowListsUseCase(listsRepository, usersRepository);

    return showlistsUseCase;
}