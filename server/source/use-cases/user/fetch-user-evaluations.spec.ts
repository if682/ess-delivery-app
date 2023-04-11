import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { FetchUserEvaluationsUseCase } from "./fetch-user-evaluations";
import { hash } from "bcryptjs";
import { InMemoryMoviesRepository } from "../../repositories/inMemory/inMemoryMoviesRepository";

let inMemoryMoviesRepository: InMemoryMoviesRepository
let sut: FetchUserEvaluationsUseCase

describe("Authenticate use case", () => {
    beforeEach(() => {
        inMemoryMoviesRepository = new InMemoryMoviesRepository();
        sut = new FetchUserEvaluationsUseCase(inMemoryMoviesRepository);
    })

    test("should be able to fetch movie evaluations", async () => {
        await inMemoryMoviesRepository.addEvaluation("user_id", "movie_01", 4);
        await inMemoryMoviesRepository.addEvaluation("user_id", "movie_02", 3);
        await inMemoryMoviesRepository.addEvaluation("user_id", "movie_03", 2);
        await inMemoryMoviesRepository.addEvaluation("user_id", "movie_04", 5);

        const { evaluations } = await sut.handle({
            authorId: "user_id"
        })

        expect(evaluations.length).toEqual(4);
    })
})