import { generatePassword, verifyPassword } from './hashPassword';

describe('Utils - encrypt test suite', () => {
  it('should be able to generate a hashed password and validate-it', async () => {
    const password = '123456';
    const hashPassword = generatePassword(password);
    const validatedPassword = await verifyPassword(
      password,
      hashPassword.toString(),
    );

    expect(validatedPassword).toBe(true);
  });
});
