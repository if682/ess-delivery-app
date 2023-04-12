import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { app } from "../../../app";
import request from "supertest"

describe("Authenticate (e2e)", () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    test("shoulde be able to authenticate user", async () => {
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

        const response = await request(app.server).post("/login").send({
            username: "joao",
            password: "Senha!12345",
        })

        expect(response.statusCode).toEqual(200);
    })

    test("shoulde not be able to authenticate with wrong password", async () => {
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

        const response = await request(app.server).post("/login").send({
            username: "joao",
            password: "Senha",
        })

        expect(response.statusCode).toEqual(500);
    })
})