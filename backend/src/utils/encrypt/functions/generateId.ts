import { randomUUID as uuId } from 'node:crypto';

const generateId = () => {
  return uuId();
};

export default generateId;
