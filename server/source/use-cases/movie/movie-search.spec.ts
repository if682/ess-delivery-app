import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryMoviesRepository } from "../../repositories/inMemory/inMemoryMoviesRepository";
import { MovieSearchUseCase } from "./movie-search";

let inMemoryMoviesRepository: InMemoryMoviesRepository
let sut: MovieSearchUseCase

describe("Search movie use case", () => {
    beforeEach(() => {
        inMemoryMoviesRepository = new InMemoryMoviesRepository();
        sut = new MovieSearchUseCase(inMemoryMoviesRepository);
    })

    test("should be able to search for movie", async () => {
        const { id } = await inMemoryMoviesRepository.createMovie({
            title: "Filme",
            description: "Um filme",
            cover: "url",
        })

        const { movie } = await sut.handle({
            id,
        })

        expect(movie.title).toEqual("Filme")
    })

    test("should not be able to search for inexistent movie", async () => {
        
        await expect(() => sut.handle({
            id: "123"
        })).rejects.toBeInstanceOf(Error)  
    })
})