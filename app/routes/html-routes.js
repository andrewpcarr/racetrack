// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var querystring = require("querystring");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // This route is for the landing page/search page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/race.html"));
  });

  // Shows users the results of their race search
  app.get("/search" +
    querystring.stringify({
      //race name
      rn: req.body.race_name,
      //city
      c: req.body.city,
      //distance
      d: req.body.distance,
      //month
      m: req.body.month,
      //swim_start
      sw: req.body.swim_start
    }),
    function(req, res) {
      db.Races.findAll({
        where: {
          $or: [{
            racename: {
              $eq: req.body.race_name
            }
          }, {
            city: {
              $eq: req.body.city
            }
          }, {
            distance: {
              $eq: req.body.distance
            }
          }, {
            month: {
              $eq: req.body.month
            }
          }, {
            swim_start: {
              $eq: req.body.swim_start
            }
          }]
        }
      }).then(function(data) {
        res.render('results', { race: data });
      });
    });

  // This will get
  app.get("/race/:id", function(req, res) {
    db.Races.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.render('race-details', { race: data });
    });
  });

  app.post("/race/:id", function(req, res) {
    console.log(req.body);
    db.Reviews.create({
      atmosphere: req.body.atmosphere,
      swag: req.body.swag,
      aid_stations: req.body.aid_stations,
      clarity: req.body.clarity,
      sighting: req.body.sighting,
      transition: req.body.transition,
      bike_hills: req.body.bike_hills,
      road_surface: req.body.road_surface,
      run_hills: req.body.run_hills,
      run_shade: req.body.run_shade,
      overall_rating: req.body.overall_rating,
      race_again: req.body.race_again,
      highlight: req.body.highlight,
      comments: req.body.comments,
      RaceId: req.params.id,
    }).then(function() {
      res.redirect('/race/:id');
    });
  });
};
