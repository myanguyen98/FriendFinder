var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./apiRoutes")(app);
require("./htmlRoutes")(app);



app.listen(process.env.PORT || PORT, function() {
  console.log("App listening on PORT " + PORT);
});