import { PrismaUsersRepository } from "../../../repositories/prisma/PrismaUsersRepository";
import { GetUserProfileUseCase } from "../../user/get-user-profile";

export function makeGetUserProfileUseCase() {
    const usersRepository = new PrismaUsersRepository();
    const getUserProfileUseCase = new GetUserProfileUseCase(usersRepository);

    return getUserProfileUseCase;
}