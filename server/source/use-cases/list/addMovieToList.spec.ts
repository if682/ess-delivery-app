import { expect, describe, test, beforeEach } from "vitest";
import { AddMovieToListUseCase } from "./add-movie-to-list";
import { RegisterUserUseCase } from "../user/register-user";
import { InMemoryListsRepository } from "../../repositories/inMemory/inMemoryListsRepository";
import { InMemoryMoviesRepository } from "../../repositories/inMemory/inMemoryMoviesRepository";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";

let inMemoryListsRepository: InMemoryListsRepository
let inMemoryMoviesRepository: InMemoryMoviesRepository
let inMemoryUsersRepository: InMemoryUsersRepository
let sut: AddMovieToListUseCase
let reg: RegisterUserUseCase

describe("Add movie to list use case", () => {
    beforeEach(async () => {
        inMemoryListsRepository = new InMemoryListsRepository();
        inMemoryMoviesRepository = new InMemoryMoviesRepository();
        inMemoryUsersRepository = new InMemoryUsersRepository();

        sut = new AddMovieToListUseCase(inMemoryListsRepository, inMemoryMoviesRepository);
        reg = new RegisterUserUseCase(inMemoryUsersRepository,inMemoryListsRepository);
        
        // cria usuário antes de cada teste
        await reg.handle({
            name: "Fulano",
            email: "fulano@gmail.com",
            username: "fulaninho123",
            birthdate: new Date(),
            password: "FulanoBox345!",
            location: null,
            phone: null
        })
        
    })

    test("should be able to add movie to default list", async () =>{
        
        const user = await inMemoryUsersRepository.findByEmail("fulano@gmail.com");
        
        if(!user){
            console.log("erro procurando fulano");
        }
        else{
            await sut.handle({
                userId: user.id,
                listName: "Historico",
                movieId: "Carros",
                cover: "url",
                description: "Um filme",
                title: "Carros"
            })

            await sut.handle({
                userId: user.id,
                listName: "Curtidos",
                movieId: "Carros",
                cover: "url",
                description: "Um filme",
                title: "Carros"
            })

            const seen = await inMemoryListsRepository.showMoviesFromList(user.id, "Historico")
            const liked = await inMemoryListsRepository.showMoviesFromList(user.id, "Curtidos")
            expect(seen.length).toEqual(1);
            expect(liked.length).toEqual(1);
        }

    })

    test("should not be able to add the same movie twice to a list", async() => {
        
    })






})