// should not be able to fetch reviews from an inexistent movie
// should be able to fetch reviews from a movie
import { beforeEach, describe, expect, test } from "vitest";
import { FetchMovieReviewsUseCase } from "./fetch-movie-reviews";
import { InMemoryReviewsRepository } from "../../repositories/inMemory/inMemoryReviewsRepository";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { InMemoryMoviesRepository } from "../../repositories/inMemory/inMemoryMoviesRepository";
import { hash } from "bcryptjs";

let inMemoryReviewsRepository: InMemoryReviewsRepository
let inMemoryMoviesRepository: InMemoryMoviesRepository
let inMemoryUsersRepository: InMemoryUsersRepository
let sut: FetchMovieReviewsUseCase

describe("Fetch movie reviews use case", () => {
    beforeEach(() => {
        inMemoryReviewsRepository = new InMemoryReviewsRepository();
        inMemoryMoviesRepository = new InMemoryMoviesRepository();
        inMemoryUsersRepository = new InMemoryUsersRepository();

        sut = new FetchMovieReviewsUseCase(inMemoryReviewsRepository, inMemoryMoviesRepository);
    })

    test("should be able to fetch movie reviews", async () => {

        const user1 = await inMemoryUsersRepository.create({
            name: "Enzo",
            email: "Enzo@cin.ufpe.br",
            username: "Enzo45",
            birthdate: new Date(),
            password: await hash("Enzoo789!", 6)
        })

        const user2 = await inMemoryUsersRepository.create({
            name: "Marco",
            email: "Marco@cin.ufpe.br",
            username: "Marco45",
            birthdate: new Date(),
            password: await hash("Marcoo789!", 6)
        })

        await inMemoryMoviesRepository.createMovie({
            id: "alvin",
            title: "alvin",
            description: "um filme",
            cover: "url"
        })

        await inMemoryReviewsRepository.create({
            title: "Bom filme",
            review: "Legal",
            movieId: "alvin",
            userId: user1.id
        })

        await inMemoryReviewsRepository.create({
            title: "Nao gostei",
            review: "Chato",
            movieId: "alvin",
            userId: user2.id
        })

        const reviews = await inMemoryReviewsRepository.findManyByMovieId("alvin");

        expect(reviews.length).toEqual(2);
    })

    test("should not be able to fetch reviews from an inexistent movie", async() =>{
        expect(async() =>
            await sut.handle({
                movieId: "MickeyInexistente"
            })
        ).rejects.toThrowError('Bad request')
    })
}) 