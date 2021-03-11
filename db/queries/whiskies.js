import knex from '../connection';

export const getAllWhiskies = () => {
  return knex('whiskies').select('id', 'name', 'rating');
}

export const getWhiskyById = (id) => {
  return knex('whiskies')
    .select('*')
    .where({ id: id })
    .first();
}