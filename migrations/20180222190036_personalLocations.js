exports.up = function(knex, Promise) {
  return knex.schema.createTable("locations", table => {
    table.increments("id").primary();
    table.text("WOE_ID");
    table.text("ISO");
    table.text("Name");
    table.text("Language");
    table.text("PlaceType");
    table.text("Parent_ID");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("locations");
};
