import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { InMemoryListsRepository } from "../../repositories/inMemory/inMemoryListsRepository";
import { RegisterUserUseCase } from "./register-user";

let inMemoryUsersRepository: InMemoryUsersRepository
let inMemoryListsRepository: InMemoryListsRepository
let sut: RegisterUserUseCase

describe("Authenticate use case", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        inMemoryListsRepository = new InMemoryListsRepository();
        sut = new RegisterUserUseCase(inMemoryUsersRepository, inMemoryListsRepository);
    })

    test("should be able to register new user", async () => {
        const { user } = await sut.handle({
            email: "joao@email.com",
            username: "joao",
            name: "Joao Silva",
            password: "Senha!12345",
            birthdate: new Date(),
            description: "",
            location: null,
            phone: null
        })

        expect(user.username).toEqual("joao");
    })

    test("should not be able to register new user with weak password", async () => {
        await expect(() => sut.handle({
            email: "joao@email.com",
            username: "joao",
            name: "Joao Silva",
            password: "123",
            birthdate: new Date(),
            description: "",
            location: null,
            phone: null
        })).rejects.toBeInstanceOf(Error);
    })
})