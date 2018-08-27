exports.up = function(knex, Promise) {
  return knex.schema.createTable("platforms", function(table) {
    table.increments();
    table.boolean("windows");
    table.boolean("mac");
    table.boolean("linux");
    table.integer("steam_app_id").references("steam_apps.id");
    table.foreign("steam_app_id").onDelete("CASCADE");

    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("platforms");
};
