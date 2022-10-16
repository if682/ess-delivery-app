import mockingoose from 'mockingoose';
import supertest from 'supertest';
import { Artist } from '../models/artist';
import bcrypt from 'bcrypt';
import app from '../server';

describe('AUTH', () => {
  describe('LOGIN', () => {
    const mockedArtist = {
      _id: '507f191e810c19729de860ea',
      name: 'Nome do cara',
      email: 'name@email.com',
    };
    const mockedArtistPassword = '123456'

    beforeAll(async () => {
      mockedArtist.password = await bcrypt.hash(mockedArtistPassword, 10);
      mockingoose(Artist).toReturn(mockedArtist, 'findOne');
    })

    afterAll(() => {
      mockingoose.resetAll();
    });


    test("Should login when pass valid credentials", async () => {
      const results = await supertest(app).post('/auth/login').send({
        email: mockedArtist.email,
        password: mockedArtistPassword
      });

      expect(results.statusCode).toBe(200);
      expect(results.body.token).toBeTruthy();
      expect(results.body.artist.name).toBe(mockedArtist.name);
    });

    test("Login mal sucedido por senha inválida", async () => {
      const results = await supertest(app).post('/auth/login').send({
        email: mockedArtist.email,
        password: "invalidpassword"
      });

      expect(results.statusCode).toBe(400);
      expect(results.body.error).toBe("Invalid credentials");
    });
  });
});
