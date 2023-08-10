import crypto from 'crypto';

const SECRET = 'crypt';

const env = (name: string) => process.env[name];
const random = () => crypto.randomBytes(128).toString();
const hash = (message: string) =>
  crypto.createHmac('sha256', message).update(SECRET).digest('hex');

export {
  env,
  random,
  hash,
};
