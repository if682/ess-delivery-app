import * as jwt from 'jsonwebtoken';

const { API_KEY } = process.env;

interface DecodedToken {
  idUser: string;
  // Adicione outras informações do token que você queira validar aqui
}

export async function validateJWT(token: string): Promise<string | null> {
  try {
    const decodedToken = (await jwt.verify(token, API_KEY)) as DecodedToken;
    return decodedToken.idUser;
  } catch (err) {
    return null;
  }
}
