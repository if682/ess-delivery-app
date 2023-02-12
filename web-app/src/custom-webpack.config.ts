const Dotenv = require('dotenv-webpack');

const envFile =
  process.env['NODE_ENV'] === 'production' ? '.env.prod' : '.env.dev';

module.exports = {
  plugins: [new Dotenv({ path: '.env.dev' })],
};
