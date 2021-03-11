exports.up = function(knex, Promise) {
  return knex.schema.createTable('whiskies', (table) => {
    table.increments('id').unsigned().primary();
    table.string('name').notNullable();
    table.string('type').notNullable();
    table.integer('rating').notNullable();
    table.string('price').notNullable();
    table.string('currency').notNullable();
    table.text('description', 'longtext');
    
    table.timestamps(true, true);
  }); 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('whiskies');
};
