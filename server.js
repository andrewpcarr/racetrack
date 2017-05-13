// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var favicon = require("serve-favicon");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./app/models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./app/public"));

//favicon
app.use(favicon(path.join(__dirname, 'app/public', 'favicon.ico')));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.set('views', __dirname + '/app/views');
app.engine("handlebars", exphbs({ defaultLayout: "main", layoutsDir: __dirname + "/app/views/layouts" }));
app.set("view engine", "handlebars");

// Routes =============================================================

// Where we will require our routes.
// These requirements will change.
require("./app/routes/html-routes.js")(app);
require("./app/routes/review-routes.js")(app);
require("./app/routes/race-routes.js")(app);

// Syncing our sequelize models and then starting our express app
//TH NOTE--I removed the "force: true" from the sync so that it wouldn't keep clearing out
//our pre-seeded tables
db.sequelize.sync({ }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
