// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads race.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/race.html"));
  });

  // whatever route loads whatever.html
  app.get("/whatever", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/whatever.html"));
  });
};
