import { expect, beforeEach, test, describe } from "vitest";
import { InMemoryListsRepository } from "../../repositories/inMemory/inMemoryListsRepository";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { RegisterUserUseCase } from "../user/register-user";
import { DeleteListUseCase } from "./delete-list";

let inMemoryListsRepository: InMemoryListsRepository
let inMemoryUsersRepository: InMemoryUsersRepository
let sut: DeleteListUseCase
let reg: RegisterUserUseCase
let user_id: string

describe("Delete list use case", async() => {
    beforeEach(async() => {
        inMemoryListsRepository = new InMemoryListsRepository();
        inMemoryUsersRepository = new InMemoryUsersRepository();

        sut = new DeleteListUseCase(inMemoryListsRepository);
        reg = new RegisterUserUseCase(inMemoryUsersRepository, inMemoryListsRepository);

        await reg.handle({
            name: "Maria",
            username: "mariazinha42",
            email: "maria77@gmail.com",
            password: "Futebol99!",
            description: "",
            birthdate: new Date(),
            location: null,
            phone: null
        })

        const user = await inMemoryUsersRepository.findByEmail("maria77@gmail.com");

        if(!user){
            throw new Error('erro procurando usuário por email');
        }

        user_id = user.id;
    })

    test("should be able to delete a list", async() => {
        const beforeDeletion = await inMemoryListsRepository.findList(user_id, "Historico");
        expect(beforeDeletion).toBeDefined();

        await sut.handle({
            userId: user_id,
            listName: "Historico"
        })
        
        const afterDeletion = await inMemoryListsRepository.findList(user_id, "Historico");
    
        expect(afterDeletion).toBeNull()

    })

    test("should not be able to delete list that does not exists", async() => {
        const exists = await inMemoryListsRepository.findList(user_id, "abacaxi");
        expect(exists).toBeNull();

        expect(async() =>
            await sut.handle({
                userId: user_id,
                listName: "abacaxi"
            })
        ).rejects.toThrowError('Not Found')
    })
})