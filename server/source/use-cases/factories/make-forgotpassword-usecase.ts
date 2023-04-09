import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";
import { MailProvider } from "../../services/implementations/MailProvider";
import { ForgotPasswordUseCase } from "../user/forgot-password";

export function makeForgotPasswordUseCase() {
    const usersRepository = new PrismaUsersRepository();
    const mailProvider = new MailProvider();
    const forgotpasswordUseCase = new ForgotPasswordUseCase(usersRepository, mailProvider);

    return forgotpasswordUseCase;
}