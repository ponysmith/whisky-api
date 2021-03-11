const path = require('path');
const BASE_PATH = path.join(__dirname, 'db');
const args = require('minimist')(process.argv.slice(2));
const env = args['env'] || process.env.NODE_ENV;

require('dotenv').config({ path: `.env.${env}` })

const baseConfig = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  },
  migrations: {
    directory: path.join(BASE_PATH, 'migrations')
  },
  seeds: {
    directory: path.join(BASE_PATH, 'seeds')
  }
}

const configs = {
  development: { ...baseConfig },
  staging: { ...baseConfig },
  production: { ...baseConfig }
}

module.exports = configs;