import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { ChangePasswordUseCase } from "./change-password";
import { compare, hash } from "bcryptjs";
import { randomBytes } from "crypto";

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: ChangePasswordUseCase

describe("Change password use case", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        sut = new ChangePasswordUseCase(inMemoryUsersRepository);

        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers();
    })

    test("should be able to change password", async () => {
        const token = randomBytes(20).toString('hex');

        vi.setSystemTime(new Date(2023, 0, 1, 12, 0, 0));

        await inMemoryUsersRepository.create({
            email: "joao@email.com",
            username: "joao",
            name: "Joao Silva",
            password: await hash("Senha!12345", 6),
            birthdate: new Date(),
            passwordResetToken: token,
            resetTokenExpires: new Date(2023, 0, 2, 12, 0, 0),
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

    test("should not be able to change password when tokens dont match", async () => {
        const token = randomBytes(20).toString('hex');

        var date = new Date()
        date.setDate(date.getDate() + 1)

        await inMemoryUsersRepository.create({
            email: "joao@email.com",
            username: "joao",
            name: "Joao Silva",
            password: await hash("Senha!12345", 6),
            birthdate: new Date(),
            passwordResetToken: null,
            resetTokenExpires: date,
        })

        await expect(() => sut.handle({
            email: "joao@email.com",
            token: token,
            newPassword: "NovaSenha!12345",
            repeatNewPassword: "NovaSenha!12345"
        })).rejects.toBeInstanceOf(Error)
    })
})