const parse = require('csv-parse');
const path = require('path');
const fs = require('fs');
const { finished } = require('stream/promises');

const processFile = async () => {
  records = []
  const csvPath = path.join(__dirname, 'csv', 'scotch_review2020.csv')
  const parser = fs
    .createReadStream(csvPath)
    .pipe(parse({
      columns: ['id', 'name', 'type', 'rating', 'price', 'currency', 'description'],
      from_line: 2
    }));
  parser.on('readable', function(){
    let record;
    while (record = parser.read()) {
      records.push(record)
    }
  });
  await finished(parser);
  return records
}

exports.seed = async function(knex, Promise) {
  const records = await processFile();
  // Deletes ALL existing entries
  return knex('whiskies').del()
    .then(function () {
      // Inserts seed entries
      return knex('whiskies').insert(records);
    });
};
