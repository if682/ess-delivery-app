import { PrismaListsRepository } from "../../../repositories/prisma/PrismaListsRepository";
import { CreateListUseCase } from "../../list/create-list";

export function makeCreateListUseCase(){
    const listsRepository = new PrismaListsRepository();
    const createListUseCase = new CreateListUseCase(listsRepository);

    return createListUseCase;
}