import * as jwt from 'jsonwebtoken';

const API_KEY = '1234';

export function generateJWT(idUser: string) {
  return jwt.sign({ idUser }, API_KEY, {
    expiresIn: 43200, // expires in 12h
  });
}
