import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { app } from "../../../app";
import request from "supertest"


describe("Register (e2e)", () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    test("shoulde be able to register new user", async () => {
        const response = await request(app.server).post("/register").send({
            email: "joao@email.com",
            username: "joao",
            name: "Joao Silva",
            password: "Senha!12345",
            birthdate: new Date(),
            description: "",
            location: null,
            phone: null
        })

        expect(response.statusCode).toEqual(201);
    })
})