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

  // This route is for the landing page/search page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/race.html"));
  });

  // Shows users the results of their race search
  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/results.handlebars"));
  });

  // This will get 
  app.get("/something", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/something"));
  });
};
