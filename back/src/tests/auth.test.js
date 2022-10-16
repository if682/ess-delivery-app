import dotenv from 'dotenv';
dotenv.config();

import mockingoose from 'mockingoose'
import supertest from 'supertest'
import { Artist } from '../models/artist';
import bcrypt from 'bcrypt';
import app from '../server';

describe('auth', () => {
  test("Should login", async () => {
    const fakePassword = "123456"
    const encryptedPassword = await bcrypt.hash(fakePassword, 10)

    const _doc = {
      _id: '507f191e810c19729de860ea',
      name: 'name',
      email: 'name@email.com',
      password: encryptedPassword,
    };

    mockingoose(Artist).toReturn(_doc, 'findOne')

    const results = await supertest(app).post('/auth/login').send({
      email: 'name@email.com',
      password: fakePassword
    })

    expect(results.statusCode).toBe(200);
  })

});
