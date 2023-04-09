import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";
import { EditUserUserUseCase } from "../edit-user";

export function makeEditUserUseCase() {
    const usersRepository = new PrismaUsersRepository();
    const editUserUseCase = new EditUserUserUseCase(usersRepository);

    return editUserUseCase;
}