import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryMoviesRepository } from "../../repositories/inMemory/inMemoryMoviesRepository";
import { ShowMoviesFromListUseCase } from "./show-movies-from-list";
import { InMemoryListsRepository } from "../../repositories/inMemory/inMemoryListsRepository";

let inMemoryListsRepository: InMemoryListsRepository
let sut: ShowMoviesFromListUseCase

describe("Show movies from list use case", () => {
    beforeEach(() => {
        inMemoryListsRepository = new InMemoryListsRepository();
        sut = new ShowMoviesFromListUseCase(inMemoryListsRepository);
    })

    test("should be able to fetch movies from a list", async () => {
        await inMemoryListsRepository.createList("Lista1", "user1");

        await inMemoryListsRepository.addMovieToList("user1", "Lista1", "movie1");
        await inMemoryListsRepository.addMovieToList("user1", "Lista1", "movie2");
        await inMemoryListsRepository.addMovieToList("user1", "Lista1", "movie3");
        await inMemoryListsRepository.addMovieToList("user1", "Lista1", "movie4");
        await inMemoryListsRepository.addMovieToList("user1", "Lista1", "movie5");

        const list = await sut.handle({
            listName: "Lista1",
            userId: "user1"
        })

        expect(list.moviesId.length).toEqual(5)
    })

    test("should not be able to fetch movies from an inexistent list", async () => {
        
        await expect(() => sut.handle({
            listName: "Lista",
            userId: "user"
        })).rejects.toBeInstanceOf(Error)
    })
})