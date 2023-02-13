const Dotenv = require('dotenv-webpack');

const envFile = process.env['NODE_ENV'] === 'prod' ? '.env.prod' : '.env.dev';

module.exports = {
  plugins: [new Dotenv({ path: envFile })],
};
