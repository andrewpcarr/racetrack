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
      rn: req.params.race_name,
      //city
      c: req.params.location,
      //distance
      d: req.params.distance,
      //month
      m: req.params.month,
      //swim_start
      sw: req.params.swim_start
    }), function(req,res){
      db.Races.findAll({
        where: {
          $or: [
            {
              racename: {
                $eq:req.params.race_name
              }
            },
            {
             city: {
               $eq: req.params.city
              }
           },
           {
            distance: {
              $eq: req.params.distance
          },
          {
            month: {
              $eq: req.params.month
            }
          },
          {
            swim_start:{
              $eq: req.params.swim_start
            }
          }
        ];
        }
      }).then(function(data) {
        res.render('results', {race:data});
      });
    });
  });

  // This will get
  app.get("/race/:id", function(req, res) {
    db.Races.findOne({
      where: {
        id: req.params.id
      }
    }).then(functin(data){
      res.render('race-details', {race: data});
    });
  });
};
