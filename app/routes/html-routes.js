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
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // This route is for the landing page/search page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/race.html"));
  });

  // Shows users the results of their race search
    app.get("/search", function (req, res) {
      console.log(req.body);
      db.Race.findAll({
        where: {
          $or: [
            {
              race_name: {
                $eq: req.body.race_name
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
              swim_start: {
                $eq: req.body.swim_start
              }
            }
          ]
        }
      }).then(function (data) {
        console.log('Render Race');
        res.render('results', { Race: data });
      });
    }); 


  app.get("/race/:id", function (req, res) {
    db.Race.findAll({
      where: {
        id: req.params.id,
      },
      include: [db.Review]
    }).then(function (data) {
      var overall = data[0].Reviews;
      // console.log("these are the Reviews: " + JSON.stringify(data[0].Reviews[0]));

      var overallRtg = getAverage(overall);
      console.log("Do we have an Average? " + overallRtg);
      var raceObj = {
        Race: data,
        Total: overallRtg
      };
      console.log("Are we getting any results? " + JSON.stringify(raceObj));
      res.render("race-details", raceObj);
    });
  });

//function to get average of overall ratings + to get the percentage of users who would do race again
  function getAverage(ratings) {
    console.log("Are these ratings coming through???? " + JSON.stringify(ratings));
    var ratingsArr = [];
    var count = ratings.length;
    var sum = 0;
    for (var i = 0; i < ratings.length; i++) {
      id = ratings[i].RaceId;
      sum = sum + ratings[i].overall;
    };
    var recommend = 0;
    var dontdoit = 0;
    for (var i = 0; i < ratings.length; i++) {
      if (ratings[i].race_again === true) {
        recommend++
      } else {
        dontdoit++
      }
    };
    var recAvg = recommend / count;
    var norecAvg = dontdoit/count; 

    var avgRating = sum / count;
    var ratingsObj = {
      id: ratings[0].RaceId,
      totalScore: avgRating,
      totalRec: [recAvg, norecAvg]
    };
    ratingsArr.push(ratingsObj);
    console.log("Ratings array: " + JSON.stringify(ratingsArr));
    //return avgRating; 
    return ratingsArr;
  }

}; 
