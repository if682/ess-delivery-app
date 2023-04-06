import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";
import { ChangePasswordUseCase } from "../change-password";

export function makeChangePasswordUseCase() {
    const usersRepository = new PrismaUsersRepository();
    const changepasswordUseCase = new ChangePasswordUseCase(usersRepository);

    return changepasswordUseCase;
}