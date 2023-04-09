import { PrismaListsRepository } from "../../repositories/prisma/PrismaListsRepository";
import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";
import { RegisterUserUseCase } from "../user/register-user";


export function makeRegisterUseCase() {
    const usersRepository = new PrismaUsersRepository();
    const listsRepository = new PrismaListsRepository();
    const registerUseCase = new RegisterUserUseCase(usersRepository, listsRepository);

    return registerUseCase;
}