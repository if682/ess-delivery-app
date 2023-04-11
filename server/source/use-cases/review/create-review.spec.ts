import { beforeEach, describe, expect, test } from "vitest";
import { InMemoryReviewsRepository } from "../../repositories/inMemory/inMemoryReviewsRepository";
import { InMemoryUsersRepository } from "../../repositories/inMemory/inMemoryUsersRepository";
import { InMemoryMoviesRepository } from "../../repositories/inMemory/inMemoryMoviesRepository";
import { hash } from "bcryptjs";
import { CreateReviewUseCase } from "./create-review";

let inMemoryReviewsRepository: InMemoryReviewsRepository
let inMemoryMoviesRepository: InMemoryMoviesRepository
let inMemoryUsersRepository: InMemoryUsersRepository
let sut: CreateReviewUseCase

describe("Create review use case", () => {
    beforeEach(() => {
        inMemoryReviewsRepository = new InMemoryReviewsRepository();
        inMemoryMoviesRepository = new InMemoryMoviesRepository();
        inMemoryUsersRepository = new InMemoryUsersRepository();

        sut = new CreateReviewUseCase(inMemoryReviewsRepository, inMemoryUsersRepository, inMemoryMoviesRepository);
    })

    test("should be able to create review", async() =>{
        const user = await inMemoryUsersRepository.create({
            name: "Jose",
            email: "Jose@cin.ufpe.br",
            username: "Jose45",
            birthdate: new Date(),
            password: await hash("Joseo789!", 6)
        })

        await inMemoryMoviesRepository.createMovie({
            id: "bento",
            title: "Chico Bento",
            description: "um filme",
            cover: "url"
        })

        await sut.handle({
            title: "Chico Bento",
            userId: user.id,
            movieId: "bento",
            review: "",
            rating: 5,
            movieCover: "url"
        })

       const review = await inMemoryReviewsRepository.findManyByAuthorId(user.id);

       expect(review.length).toEqual(1);
    })

    test("should not be able to create review if user does not exists", async() => {
        await inMemoryMoviesRepository.createMovie({
            id: "bento",
            title: "Chico Bento",
            description: "um filme",
            cover: "url"
        })

        expect(async() => 
            await sut.handle({
                title: "Chico Bento",
                userId: "MariaInexistente",
                movieId: "bento",
                review: "",
                rating: 5,
                movieCover: "url"
            })
        ).rejects.toThrowError()
    })

    test("should not be able to create a review of an inexistent movie", async() =>{
        const user = await inMemoryUsersRepository.create({
            name: "Cleber",
            email: "Cleber@cin.ufpe.br",
            username: "Cleber45",
            birthdate: new Date(),
            password: await hash("Clebero789!", 6)
        })

        expect(async() => 
            await sut.handle({
                title: "Chicao",
                userId: user.id,
                movieId: "bentoInexistente",
                review: "",
                rating: 5,
                movieCover: "url"
            })
        ).rejects.toThrowError()
    })


}) 