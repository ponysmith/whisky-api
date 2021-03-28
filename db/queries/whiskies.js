import knex from '../connection';

export const getAllWhiskies = (filterObj) => {
  const query = knex('whiskies')
    .select('id', 'name', 'rating')
    .limit(100);
  query.where('rating', '>=', filterObj.ratingMin)
  query.where('rating', '<=', filterObj.ratingMax)
  switch(filterObj.type) {
    case 'sms':
      query.where('type', '=', 'Single Malt Scotch');
      break;
    case 'bsw':
      query.where('type', '=', 'Blended Scotch Whisky');
      break;
    case 'bmsw':
      query.where('type', '=', 'Blended Malt Scotch Whisky');
      break;
    default:
      break;
  }

  return query;
}

export const getWhiskyById = (id) => {
  return knex('whiskies')
    .select('*')
    .where({ id: id })
    .first();
}