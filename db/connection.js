import knex from 'knex';
import knexfile from '../knexfile';

// const environment = process.env.NODE_ENV || 'development';
const config = knexfile[process.env.NODE_ENV];
export default knex(config);