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
  app.get("/search", function(req,res) {
    console.log(req.body);
      db.Race.findAll({
        where: {
        $or: [
          {
            race_name: {
              $eq:req.body.race_name
            }
          },
          {
           city: {
             $eq: req.body.city
            }
         },
         {
          distance: {
            $eq: req.body.distance
          }
        },
        {
          race_month: {
            $eq: req.body.race_month
          }
        },
        {
          swim_start:{
            $eq: req.body.swim_start
          }
        }
      ]
        }
    }).then(function(data) {
        console.log('Render Race');
        res.render('results', {Race:data});
      });
    });

  // This will get
  app.get("/race/:id", function(req, res) {
    db.Race.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data){
      res.render('race-details', {race: data});
    });
  });
}; 
