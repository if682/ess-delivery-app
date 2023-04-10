import { expect, describe, test, beforeEach } from "vitest";
import { AddMovieToListUseCase } from "./add-movie-to-list";
import { RegisterUserUseCase } from "../user/register-user";
import { InMemoryListsRepository } from "../../repositories/inMemory/inMemoryListsRepository";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";

let inMemoryListsRepository: InMemoryListsRepository
let inMemoryUsersRepository: InMemoryUsersRepository
let sut: AddMovieToListUseCase
let reg: RegisterUserUseCase
let user_id: string

describe("Add movie to list use case", () => {
    beforeEach(async () => {
        inMemoryListsRepository = new InMemoryListsRepository();
        inMemoryUsersRepository = new InMemoryUsersRepository();

        sut = new AddMovieToListUseCase(inMemoryListsRepository);
        reg = new RegisterUserUseCase(inMemoryUsersRepository,inMemoryListsRepository);
        
        // cria usuário antes de cada teste
        await reg.handle({
            name: "Fulano",
            username: "fulaninho123",
            email: "fulano@gmail.com",
            password: "FulanoBox345!",
            description: "",
            birthdate: new Date(),
            location: null,
            phone: null
        })
        
        const user = await inMemoryUsersRepository.findByEmail("fulano@gmail.com");
        
        if(!user){
            throw new Error("erro procurando usuário por email")
        }
        user_id = user.id
        
    })

    test("should be able to add movie to list", async () =>{
        
        await sut.handle({
                userId: user_id ,
                listName: "Historico",
                movieId: "Carros",
                cover: "url",
                description: "Um filme",
                title: "Carros"
            })

        await sut.handle({
                userId: user_id,
                listName: "Curtidos",
                movieId: "Carros",
                cover: "url",
                description: "Um filme",
                title: "Carros"
            })

        const seen = await inMemoryListsRepository.showMoviesFromList(user_id, "Historico")
        const liked = await inMemoryListsRepository.showMoviesFromList(user_id, "Curtidos")

        expect(seen.length).toEqual(1);
        expect(liked.length).toEqual(1);
        

    })

    test("should not be able to add the same movie to a list twice", async() => {
     
        await sut.handle({
                userId: user_id,
                listName: "Historico",
                movieId: "Mickey",
                cover: "url",
                description: "disney",
                title: "Mickey"
            })
           
            
        expect(async() => 
            await sut.handle({
                userId: user_id,
                listName: "Historico",
                movieId: "Mickey",
                cover: "url",
                description: "disney",
                title: "Mickey"
            })
        ).rejects.toThrowError('Movie already in List');
        
    })

    test("should not be able to add movie to a list that was not created", async() => {
        expect(async() =>
            await sut.handle({
                userId: user_id,
                listName: "Ferias",
                movieId: "Carros",
                cover: "url",
                description: "filme",
                title: "Carros"
            })
        ).rejects.toThrowError('List does not exist');
    })


})