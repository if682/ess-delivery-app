import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { ForgotPasswordUseCase } from "./forgot-password";
import { hash } from "bcryptjs";
import { IMailProvider } from "../../services/IMailProvider";
import { MailProvider } from "../../services/implementations/MailProvider";

let inMemoryUsersRepository: InMemoryUsersRepository
let mailProvider: IMailProvider
let sut: ForgotPasswordUseCase

describe("Authenticate use case", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        mailProvider = new MailProvider;
        sut = new ForgotPasswordUseCase(inMemoryUsersRepository, mailProvider);
    })

    test("should be able to request for password change", async () => {
        await inMemoryUsersRepository.create({
            email: "joao@email.com",
            username: "joao",
            name: "Joao Silva",
            password: await hash("Senha!12345", 6),
            birthdate: new Date(),
        })

        const { user } = await sut.handle({
            email: "joao@email.com",
        })

        expect(user.passwordResetToken).toEqual(expect.any(String));
        expect(user.resetTokenExpires).toEqual(expect.any(Date));
    })
})