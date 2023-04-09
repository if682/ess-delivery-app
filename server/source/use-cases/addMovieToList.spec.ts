import { PrismaListsRepository } from "../repositories/prisma/PrismaListsRepository";
import { PrismaMoviesRepository } from "../repositories/prisma/PrismaMoviesRepository";
import { PrismaUsersRepository } from "../repositories/prisma/PrismaUsersRepository";
import { expect, describe, test, beforeEach, vi} from "vitest";
import { AddMovieToListUseCase } from "./add-movie-to-list";
import { RegisterUserUseCase } from "./register-user";
import { PrismaClient } from "@prisma/client";
import { Sql } from "@prisma/client/runtime";


let listsRepository: PrismaListsRepository
let moviesRepository: PrismaMoviesRepository
let usersRepository: PrismaUsersRepository
let sut: AddMovieToListUseCase
let reg: RegisterUserUseCase

const prisma = new PrismaClient()

describe("Add movie to list use case", () => {
    beforeEach(() => {
        listsRepository = new PrismaListsRepository();
        moviesRepository = new PrismaMoviesRepository();
        usersRepository = new PrismaUsersRepository();
        sut = new AddMovieToListUseCase(listsRepository, moviesRepository);
        reg = new RegisterUserUseCase(usersRepository, listsRepository);
    })

    test("should be able to add movie to default list", async () =>{

        const user = await reg.handle({
            name: "Fulano",
            username: "FulanoLetter",
            password: "Letterbox123!",
            email: "fulanobox@cin.ufpe.br",
            birthdate: new Date(),
            phone: null,
            location: null
        })

        await prisma.$executeRaw`DROP SCHEMA IF EXISTS public CASCADE;`
        await prisma.$executeRaw `CREATE SCHEMA public`;
        

        

        

        listsRepository.createList(
            "Historico",
            "1109090"
        )

        const HistoryListSize = await sut.handle({
            userId: "1109090",
            listName: "Historico",
            movieId: "1212"
        })

        // const LikedListSize = await sut.handle({
        //     userId: "1109090",
        //     listName: "Curtidos",
        //     movieId: "1212"
        // })

        console.log(HistoryListSize);
        // expect(HistoryListSize).toHaveLength(1);
        //expect(LikedListSize).toHaveLength(1);



    })






})