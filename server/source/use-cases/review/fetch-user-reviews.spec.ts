import { beforeEach, describe, expect, test } from "vitest";
import { FetchUserReviewsUseCase } from "./fetch-user-reviews";
import { InMemoryReviewsRepository } from "../../repositories/inMemory/inMemoryReviewsRepository";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { InMemoryMoviesRepository } from "../../repositories/inMemory/inMemoryMoviesRepository";
import { hash } from "bcryptjs";

let inMemoryReviewsRepository: InMemoryReviewsRepository
let inMemoryUsersRepository: InMemoryUsersRepository
let inMemoryMoviesRepository: InMemoryMoviesRepository
let sut: FetchUserReviewsUseCase

describe("Fetch user reviews use case", () => {
    beforeEach(() => {
        inMemoryReviewsRepository = new InMemoryReviewsRepository();
        inMemoryUsersRepository = new InMemoryUsersRepository();
        inMemoryMoviesRepository = new InMemoryMoviesRepository();

        sut = new FetchUserReviewsUseCase(inMemoryReviewsRepository, inMemoryUsersRepository);
    })

    test("should be able to fetch reviews", async () => {
        const user = await inMemoryUsersRepository.create({
            name: "Julio",
            email: "julio@cin.ufpe.br",
            username: "Julio45",
            birthdate: new Date(),
            password: await hash("Juliao789!", 6)
        })

        await inMemoryMoviesRepository.createMovie({
            id: "pluto",
            title: "Pluto",
            cover: "url",
            description: "filme"
        })

        await inMemoryReviewsRepository.create({
            title: "Bom filme",
            review: "Legal",
            movieId: "pluto",
            userId: user.id
        })

        const {reviews} =  await sut.handle({
            authorId: user.id
        })

        expect(reviews.length).toEqual(1);
        expect(reviews[0].movieId).toEqual("pluto");
       
    })

    test("should not be able to fetch reviews from an inexistent user", async() =>{
        
        expect(async() =>
            await sut.handle({
                authorId: "JoaoInexistente"
            })
        ).rejects.toThrowError('Bad request')
    })
}) 