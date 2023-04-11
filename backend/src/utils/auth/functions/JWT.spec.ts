import * as dotenv from 'dotenv';
import { generateJWT } from './generateJWT';
import { validateJWT } from './validateJWT';
dotenv.config();

describe('Utils - JWT test suite', () => {
  it('should generate a valid jwt when executed', async () => {
    const userId = 'userId';
    const jwt = await generateJWT('userId');

    const decodedJWT = await validateJWT(jwt);

    expect(decodedJWT).toBe(userId);
  });
});
