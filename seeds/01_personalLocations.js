exports.seed = function(knex, Promise) {
  return knex("locations")
    .del()
    .then(function() {
      return knex("locations").insert([
        {
          WOE_ID: 12515224,
          ISO: "XS",
          Name: "Pagasa Airport",
          Language: "ENG",
          PlaceType: "Airport",
          Parent_ID: 23424921
        },
        {
          WOE_ID: 23424921,
          ISO: "XS",
          Name: "Spratly Islands",
          Language: "ENG",
          PlaceType: "Country",
          Parent_ID: 1
        },
        {
          WOE_ID: 12497559,
          ISO: "XS",
          Name: "Itu Aba Island",
          Language: "ENG",
          PlaceType: "Island",
          Parent_ID: 23424921
        },
        {
          WOE_ID: 12497562,
          ISO: "XS",
          Name: "Namyit Island",
          Language: "ENG",
          PlaceType: "Island",
          Parent_ID: 23424921
        }
      ]);
    });
};
