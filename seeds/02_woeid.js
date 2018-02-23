exports.seed = function(knex, Promise) {
  return knex("woeid")
    .del()
    .then(function() {
      return knex("woeid").insert([
        {
          WOE_ID: "2347559",
          ISO: "US",
          Name: "Alabama",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347560",
          ISO: "US",
          Name: "Alaska",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347561",
          ISO: "US",
          Name: "Arizona",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347563",
          ISO: "US",
          Name: "California",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347564",
          ISO: "US",
          Name: "Colorado",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347565",
          ISO: "US",
          Name: "Connecticut",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347566",
          ISO: "US",
          Name: "Delaware",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347567",
          ISO: "US",
          Name: "District of Columbia",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347568",
          ISO: "US",
          Name: "Florida",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347569",
          ISO: "US",
          Name: "Georgia",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347570",
          ISO: "US",
          Name: "Hawaii",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347571",
          ISO: "US",
          Name: "Idaho",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347572",
          ISO: "US",
          Name: "Illinois",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347573",
          ISO: "US",
          Name: "Indiana",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347574",
          ISO: "US",
          Name: "Iowa",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347575",
          ISO: "US",
          Name: "Kansas",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347576",
          ISO: "US",
          Name: "Kentucky",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347578",
          ISO: "US",
          Name: "Maine",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347579",
          ISO: "US",
          Name: "Maryland",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347580",
          ISO: "US",
          Name: "Massachusetts",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347581",
          ISO: "US",
          Name: "Michigan",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347582",
          ISO: "US",
          Name: "Minnesota",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347583",
          ISO: "US",
          Name: "Mississippi",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347584",
          ISO: "US",
          Name: "Missouri",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347585",
          ISO: "US",
          Name: "Montana",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347586",
          ISO: "US",
          Name: "Nebraska",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347587",
          ISO: "US",
          Name: "Nevada",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347588",
          ISO: "US",
          Name: "New Hampshire",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347589",
          ISO: "US",
          Name: "New Jersey",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347590",
          ISO: "US",
          Name: "New Mexico",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        },
        {
          WOE_ID: "2347591",
          ISO: "US",
          Name: "New York",
          Language: "ENG",
          PlaceType: "State",
          Parent_ID: "23424977"
        }
      ]);
    });
};
