import { expect, beforeEach, test, describe } from "vitest";
import { InMemoryListsRepository } from "../../repositories/inMemory/inMemoryListsRepository";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { RegisterUserUseCase } from "../user/register-user";
import { ShowListsUseCase } from "./show-lists";


let inMemoryListsRepository: InMemoryListsRepository
let inMemoryUsersRepository: InMemoryUsersRepository

let sut: ShowListsUseCase
let reg: RegisterUserUseCase
let user_id: string

describe("Delete movie from list use case", async() => {
    beforeEach(async() => {
        inMemoryListsRepository = new InMemoryListsRepository();
        inMemoryUsersRepository = new InMemoryUsersRepository();

        sut = new ShowListsUseCase(inMemoryListsRepository, inMemoryUsersRepository);
        reg = new RegisterUserUseCase(inMemoryUsersRepository, inMemoryListsRepository);


        const { user } = await reg.handle({
            name: "Messi",
            username: "messinho123",
            email: "goat@gmail.com",
            password: "MSNbarca15!",
            description: "",
            birthdate: new Date(),
            location: null,
            phone: null
        })


        if(!user){
            throw new Error('erro no registro');
        }

        user_id = user.id;
    })

    test("should be able to fetch lists of an existing user", async() => {

        const lists = await sut.handle({userId: user_id})
        expect(lists.lists.length).toEqual(2)
        
        let liked: boolean = false;
        let seen: boolean = false;

        liked = (lists.lists[0].name == "Curtidos" || lists.lists[1].name == "Curtidos");
        seen = (lists.lists[0].name == "Historico" || lists.lists[1].name == "Historico");

        expect(liked).toBeTruthy();
        expect(seen).toBeTruthy();
    })

    test("should not be able to fetch lists from non existing user", async() =>{
        const user = await inMemoryUsersRepository.findById("ABC");
        expect(user).toBeNull();

        expect(async() =>
            await sut.handle({
                userId:"ABC"
            })
        ).rejects.toThrowError('Not Found')

    })

})