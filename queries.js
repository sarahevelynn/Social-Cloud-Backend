const database = require("./database-connection");

module.exports = {
  list(table) {
    return database(table).select();
  },
  read(id, table) {
    return database(table)
      .where("id", id)
      .first();
  },
  createLocations(locations) {
    return database("personalLocations")
      .insert(locations)
      .returning("*")
      .then(record => record[0]);
  },
  updateLocations(id, request) {
    return database("personalLocations")
      .update(request)
      .where("id", id)
      .returning("*")
      .then(record => record);
  },
  deleteLocations(id) {
    return database("personalLocations")
      .delete()
      .where("id", id);
  }
};
