import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";
import { RegisterUserUseCase } from "../register-user";

export function makeRegisterUseCase() {
    const usersRepository = new PrismaUsersRepository();
    const registerUseCase = new RegisterUserUseCase(usersRepository);

    return registerUseCase;
}