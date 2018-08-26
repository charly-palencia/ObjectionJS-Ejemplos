exports.up = function (knex, Promise) {
  return knex.schema.createTable("platforms", function (table) {
    table.increments();
    table.string("name");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("platforms");
};
