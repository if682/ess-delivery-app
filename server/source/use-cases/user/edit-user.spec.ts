import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { EditUserUserUseCase } from "./edit-user";
import { hash } from "bcryptjs";

let inMemoryUsersRepository: InMemoryUsersRepository
let sut: EditUserUserUseCase

describe("Authenticate use case", () => {
    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        sut = new EditUserUserUseCase(inMemoryUsersRepository);
    })

    test("should be able to edit user", async () => {
        const oldDataUser = await inMemoryUsersRepository.create({
            email: "joao@email.com",
            username: "joao",
            name: "Joao Silva",
            password: await hash("Senha!12345", 6),
            birthdate: new Date(),
        })

        const { user } = await sut.handle({
            name: "Joao Silva Santos",
            email: "joaosilva@email.com",
            birthdate: oldDataUser.birthdate,
            description: "My description",
            location: oldDataUser.location,
            phone: oldDataUser.phone,
            username: oldDataUser.username,
        })

        expect(user.name).toEqual("Joao Silva Santos");
        expect(user.email).toEqual("joaosilva@email.com");
        expect(user.description).toEqual("My description");
        expect(user.username).toEqual(oldDataUser.username);
        
    })

    test("should not be able to edit unexisting user", async () => {

        await expect(() => sut.handle({
            name: "Joao Silva Santos",
            email: "joaosilva@email.com",
            birthdate: new Date(),
            description: "My description",
            location: "",
            phone: "",
            username: "",
        })).rejects.toBeInstanceOf(Error) 
    })
})