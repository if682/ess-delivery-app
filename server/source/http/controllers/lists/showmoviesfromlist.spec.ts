import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { app } from "../../../app";
import request from "supertest"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

describe("Show movies from list (e2e)", () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    test("shoulde be able to list movies from a created list", async () => {
        await request(app.server).post("/register").send({
            email: "joao@email.com",
            username: "joao",
            name: "Joao Silva",
            password: "Senha!12345",
            birthdate: new Date(),
            description: "",
            location: null,
            phone: null
        })

        await request(app.server).post("/login").send({
            username: "joao",
            password: "Senha",
        })

        await request(app.server).post("/movie").send({
            id: "01",
            title: "Movie",
            cover: "url",
            description: "A movie"
        })

        await prisma.user.update({
            where: {
                username: "joao",
            },
            data: {
                id: "user"
            }
        })

        await request(app.server).post("/list/user").send({
            userId: "user",
            name: "Lista",
        })

        await request(app.server).post("/list/user/Lista").send({
            userId: "user", 
            listName: "Lista",
            movieId: "01",
            title: "Movie",
            cover: "url",
            description: "A movie"
        })

        const response = await request(app.server).get("/list/user/Lista").send();
    })
})