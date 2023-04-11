import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { GetUserProfileUseCase } from "./get-user-profile";
import { hash } from "bcryptjs";

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: GetUserProfileUseCase

describe("Authenticate use case", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        sut = new GetUserProfileUseCase(inMemoryUsersRepository);
    })

    test("should be able to get a users profile", async () => {
        await inMemoryUsersRepository.create({
            id: "123",
            email: "joao@email.com",
            username: "joao",
            name: "Joao Silva",
            password: await hash("Senha!12345", 6),
            birthdate: new Date(),
        })

        const { user } = await sut.handle({
            id: "123"
        })

        expect(user.username).toEqual("joao");
    })
})