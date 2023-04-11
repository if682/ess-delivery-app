import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { AuthenticateUserUseCase } from "./authenticate-user";
import { string } from "zod";
import { hash } from "bcryptjs";

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: AuthenticateUserUseCase

describe("Authenticate use case", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        sut = new AuthenticateUserUseCase(inMemoryUsersRepository);
    })

    test("should be able to authenticate", async () => {
        await inMemoryUsersRepository.create({
            email: "joao@email.com",
            username: "joao",
            name: "Joao Silva",
            password: await hash("Senha!12345", 6),
            birthdate: new Date(),
        })

        const { user } = await sut.handle({
            username: "joao",
            password: "Senha!12345",
        })

        expect(user.id).toEqual(expect.any(String));
    })

    test("should not be able to authenticate with wrong password", async () => {
        await inMemoryUsersRepository.create({
            email: "joao@email.com",
            username: "joao",
            name: "Joao Silva",
            password: await hash("Senha!12345", 6),
            birthdate: new Date(),
        })

        await expect(() => sut.handle({
            username: "joao",
            password: "senhaerrada",
        })).rejects.toBeInstanceOf(Error)
    })
})