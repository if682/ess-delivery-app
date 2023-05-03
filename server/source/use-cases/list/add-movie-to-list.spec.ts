import { expect, describe, test, beforeEach } from "vitest";
import { AddMovieToListUseCase } from "./add-movie-to-list";
import { RegisterUserUseCase } from "../user/register-user";
import { InMemoryListsRepository } from "../../repositories/inMemory/inMemoryListsRepository";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { InMemoryMoviesRepository } from "../../repositories/inMemory/inMemoryMoviesRepository";

let inMemoryListsRepository: InMemoryListsRepository
let inMemoryUsersRepository: InMemoryUsersRepository
let inMemoryMoviesRepository: InMemoryMoviesRepository
let sut: AddMovieToListUseCase
let reg: RegisterUserUseCase
let user_id: string

describe("Add movie to list use case", () => {
    beforeEach(async () => {
        inMemoryListsRepository = new InMemoryListsRepository();
        inMemoryUsersRepository = new InMemoryUsersRepository();
        inMemoryMoviesRepository = new InMemoryMoviesRepository();

        sut = new AddMovieToListUseCase(inMemoryListsRepository, inMemoryMoviesRepository);
        reg = new RegisterUserUseCase(inMemoryUsersRepository,inMemoryListsRepository);
        
        // cria usuário antes de cada teste
        const { user } = await reg.handle({
            name: "Fulano",
            username: "fulaninho123",
            email: "fulano@gmail.com",
            password: "FulanoBox345!",
            description: "",
            birthdate: new Date(),
            location: null,
            phone: null
        })
    
        if(!user){
            throw new Error("erro no registro")
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
        ).rejects.toThrowError('Bad request');
    })


})