import jwt from 'jsonwebtoken';

const { API_KEY } = process.env;

export function validateJWT(token: string) {
  if (!token) {
    return false;
  } else {
    return new Promise(() =>
      jwt.verify(token, API_KEY, (err, decoded) => (err ? false : decoded)),
    );
  }
}
