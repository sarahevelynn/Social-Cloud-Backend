const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Hey");
});

app.listen(process.env.PORT || 3000);
