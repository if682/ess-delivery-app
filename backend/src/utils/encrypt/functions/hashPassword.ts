import { pbkdf2Sync } from 'node:crypto';

const API_KEY = process.env.API_KEY || 'API_KEY';

export const generatePassword = (password: string) => {
  return pbkdf2Sync(password, API_KEY, 2, 64, 'sha256');
};

export const verifyPassword = (password: string, hashPassword: string) => {
  const hash = generatePassword(password).toString();
  return hash === hashPassword;
};
