import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryMoviesRepository } from "../../repositories/inMemory/inMemoryMoviesRepository";
import { CreateMovieUseCase } from "./create-movie";

let inMemoryMoviesRepository: InMemoryMoviesRepository
let sut: CreateMovieUseCase

describe("Create movie use case", () => {
    beforeEach(() => {
        inMemoryMoviesRepository = new InMemoryMoviesRepository();
        sut = new CreateMovieUseCase(inMemoryMoviesRepository);
    })

    test("should be able to register new movie", async () => {
        const movie = await inMemoryMoviesRepository.createMovie({
            title: "Filme",
            description: "Um filme",
            cover: "url",
        })

        expect(movie.id).toEqual(expect.any(String));
    })
})