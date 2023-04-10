import { expect, test, describe, beforeEach } from "vitest";
import { CreateListUseCase } from "./create-list";
import { RegisterUserUseCase } from "../user/register-user";
import { InMemoryListsRepository } from "../../repositories/inMemory/inMemoryListsRepository";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";


let inMemoryListsRepository: InMemoryListsRepository
let inMemoryUsersRepository: InMemoryUsersRepository
let sut: CreateListUseCase
let reg: RegisterUserUseCase
let user_id: string

describe("Create list use case", async() => {
    beforeEach(async() => {
        inMemoryListsRepository = new InMemoryListsRepository();
        inMemoryUsersRepository = new InMemoryUsersRepository();

        sut = new CreateListUseCase(inMemoryListsRepository);
        reg = new RegisterUserUseCase(inMemoryUsersRepository, inMemoryListsRepository);

        await reg.handle({
            name: "Joao",
            username: "joaozinho75",
            email: "joao23@gmail.com",
            password: "!Software45",
            description: "",
            birthdate: new Date(),
            location: null,
            phone: null
        })

        const user = await inMemoryUsersRepository.findByUsername("joaozinho75");

        if(!user){
            throw new Error('erro procurando usuário por username');
        }

        user_id = user.id;
    })

    test("should be able to create a list", async() => {
        await sut.handle({
            name: "Legais",
            userId: user_id
        })

        const foundList = await inMemoryListsRepository.findList(user_id, "Legais");

        expect(foundList).toBeDefined();
    })

    test("should prohibit creating lists with names that are already taken by the user", async() => {
        await sut.handle({
            name: "Feliz",
            userId: user_id
        })

        expect(async() => 
            await sut.handle({
                name: "fEliz",
                userId: user_id
            })
        ).rejects.toThrowError('This list already exists')
    })

    test("should not be able to create list with empty name", async() => {
        expect(async() =>
            await sut.handle({
                name: "",
                userId: user_id
            })
        ).rejects.toThrowError('Invalid name')
    })

    test("should not be able to create list with name containing only whitespaces", async() => {
        expect(async() =>
            await sut.handle({
                name: "      ",
                userId: user_id
            })
        ).rejects.toThrowError('Invalid name')
    })

    test("should not be able to create list with name longer than 80 characters", async() => {
        const listName = "a".repeat(81);
        expect(async() => 
            await sut.handle({
                name: listName,
                userId: user_id
            })
        ).rejects.toThrowError('Invalid name')
    })

    test("should not be able to create list with name containing '&', '@', '$' or '%'", async() =>{
        const array = ['&', '@', '$', '%'];

        for(var i=0; i<4; i++){
            expect(async() =>
                await sut.handle({
                    name: "nomelegal" + array[i],
                    userId: user_id
                })
            ).rejects.toThrowError('Invalid name')
        }
        
    })


})
