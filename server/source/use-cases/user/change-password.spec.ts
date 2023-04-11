import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { ChangePasswordUseCase } from "./change-password";
import { compare, hash } from "bcryptjs";
import { randomBytes } from "crypto";

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: ChangePasswordUseCase

describe("Authenticate use case", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        sut = new ChangePasswordUseCase(inMemoryUsersRepository);
    })

    test("should be able to change password", async () => {
        const token = randomBytes(20).toString('hex');

        await inMemoryUsersRepository.create({
            email: "joao@email.com",
            username: "joao",
            name: "Joao Silva",
            password: await hash("Senha!12345", 6),
            birthdate: new Date(),
            passwordResetToken: token,
            resetTokenExpires: new Date(),
        })

        const { user } = await sut.handle({
            email: "joao@email.com",
            token: token,
            newPassword: "NovaSenha!12345",
            repeatNewPassword: "NovaSenha!12345"
        })

        const passwordMatches = await compare("NovaSenha!12345", user.password);

        expect(passwordMatches).toEqual(true);
    })
})