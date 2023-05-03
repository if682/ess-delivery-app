import { PrismaListsRepository } from "../../../repositories/prisma/PrismaListsRepository";
import { DeleteListUseCase } from "../../list/delete-list";

export function makeDeleteListUseCase(){
    const listsRepository = new PrismaListsRepository();
    const deleteListUseCase = new DeleteListUseCase(listsRepository);

    return deleteListUseCase;
}