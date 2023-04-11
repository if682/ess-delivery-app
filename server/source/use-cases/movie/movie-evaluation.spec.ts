import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryMoviesRepository } from "../../repositories/inMemory/inMemoryMoviesRepository";
import { MovieEvaluationUseCase } from "./movie-evaluation";

let inMemoryMoviesRepository: InMemoryMoviesRepository
let sut: MovieEvaluationUseCase

describe("Create movie use case", () => {
    beforeEach(() => {
        inMemoryMoviesRepository = new InMemoryMoviesRepository();
        sut = new MovieEvaluationUseCase(inMemoryMoviesRepository);
    })

    test("should be able to add evaluation to movie", async () => {
        const movie = await inMemoryMoviesRepository.createMovie({
            title: "Filme",
            description: "Um filme",
            cover: "url",
        })


        const evaluation = await sut.handle({
            userId: "user",
            movieId: movie.id,
            rating: 1
        })

        expect(evaluation.evaluation.rating).toEqual(1);

        const secondEvaluation = await sut.handle({
            userId: "user",
            movieId: movie.id,
            rating: 3
        })

        expect(secondEvaluation.evaluation.rating).toEqual(3);

        const thridEvaluation = await sut.handle({
            userId: "user",
            movieId: movie.id,
            rating: 5
        })

        expect(thridEvaluation.evaluation.rating).toEqual(5);
    })
})