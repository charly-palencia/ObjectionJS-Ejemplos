exports.up = function(knex, Promise) {
  return knex.schema.createTable("steam_apps", function(table) {
    table.increments();
    table.string("name");
    table.string("type");
    table.integer("steam_appid");
    table.integer("required_age");
    table.boolean("is_free");
    table.text("detailed_description");
    table.text("reviews");
    table.text("header_image");
    table.string("website");
    table.json("price_overview");
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("steam_apps");
};
