import { expect, beforeEach, test, describe } from "vitest";
import { InMemoryListsRepository } from "../../repositories/inMemory/inMemoryListsRepository";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { RegisterUserUseCase } from "../user/register-user";
import { DeleteMovieFromListUseCase } from "./delete-movie-from-list";
import { AddMovieToListUseCase } from "./add-movie-to-list";

let inMemoryListsRepository: InMemoryListsRepository
let inMemoryUsersRepository: InMemoryUsersRepository
let sut: DeleteMovieFromListUseCase
let reg: RegisterUserUseCase
let add: AddMovieToListUseCase
let user_id: string

describe("Delete movie from list use case", async() => {
    beforeEach(async() => {
        inMemoryListsRepository = new InMemoryListsRepository();
        inMemoryUsersRepository = new InMemoryUsersRepository();

        sut = new DeleteMovieFromListUseCase(inMemoryListsRepository);
        reg = new RegisterUserUseCase(inMemoryUsersRepository, inMemoryListsRepository);
        add = new AddMovieToListUseCase(inMemoryListsRepository);

        await reg.handle({
            name: "Francisco",
            username: "francisco42",
            email: "fran77@gmail.com",
            password: "Neymar10!",
            description: "",
            birthdate: new Date(),
            location: null,
            phone: null
        })

        const user = await inMemoryUsersRepository.findByEmail("fran77@gmail.com");

        if(!user){
            throw new Error('erro procurando usuário por email');
        }
        const listExists = await inMemoryListsRepository.findList(user_id, "Historico");
        expect(listExists).toBeDefined();

        user_id = user.id;
    })

    test("should be able to delete a movie from list", async() => {

        await inMemoryListsRepository.addMovieToList(user_id, "Historico", "Carrito");
        const findCarritoBefore = await inMemoryListsRepository.movieInList("Carrito", user_id, "Historico");
        expect(findCarritoBefore).toBeTruthy();

        await sut.handle({
            userId: user_id,
            listName: "Historico",
            movieId: "Carrito"
        })

        const findCarritoAfter = await inMemoryListsRepository.movieInList("Carrito", user_id, "Historico");
        expect(findCarritoAfter).toBeFalsy();
    })

    test("should not be able to remove a movie that is not in the list", async() => {
        
        const findMadagascar = await inMemoryListsRepository.movieInList("Madagascar", user_id, "Historico");
        expect(findMadagascar).toBeFalsy();

        expect(async() =>
            await sut.handle({
                userId: user_id,
                listName: "Historico",
                movieId: "Madagascar"
            })
        ).rejects.toThrowError('Invalid')
    })


})