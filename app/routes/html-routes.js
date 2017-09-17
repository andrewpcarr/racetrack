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

  app.post("/search", function (req, res) {
    if (req.body.race_name === '' && req.body.race_name === '' && req.body.city === '' && req.body.distance === '' && req.body.race_month === 'Choose a Month' && req.body.swim_start === 'Swim Start') {
      // show em all!
      db.Race.findAll({
        include: [db.Review]
      }).then(function (data) {
        console.log("Show the data! +++++++++++++++++++");
        var overall = data;
       // var overallRtg = getAverage(overall);
        var raceObj = {
          Race: data
         // Total: overallRtg
        };
        res.render('results', raceObj);
      });
    } else {
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
            }, {
              race_month: {
                $eq: req.body.race_month
              }
            }, {
              swim_start: {
                $eq: req.body.swim_start
              }
            }]
        },
        include: [db.Review]
      }).then(function (data) {
        // var overall = data;
        // var overallRtg = getAverage(overall);
        var raceObj = {
          Race: data
          // Total: overallRtg
        };
        res.render('results', raceObj);
      });
    }
  });

  app.get("/race/:id", function (req, res) {
    db.Race.findAll({
      where: {
        id: req.params.id,
      },
      include: [db.Review]
    }).then(function (data) {
      //console.log(JSON.stringify(data)); 
      var overall = data;
      // console.log("these are the Reviews: " + JSON.stringify(data));
      var overallRtg = getAverage(overall);
      //console.log("Do we have an Average? " + JSON.stringify(overallRtg));
      var raceObj = {
        Race: data,
        Total: overallRtg
      };
      console.log(raceObj.Race);
      //console.log("Are we getting any results? " + JSON.stringify(raceObj));
      res.render("race-details", raceObj);
    });
  });

  //function to get average of overall ratings 
  function getAverage(searchResults) {
    console.log("Are these ratings coming through???? " + JSON.stringify(searchResults));
    var ratingsArr = [];
    var numberRaces = searchResults.length;

    for (var i = 0; i < searchResults.length; i++) {

      var raceReviews = searchResults[i].Reviews;
      var count = raceReviews.length;
      var sum = 0;
      var averages = [];
      for (var j = 0; j < raceReviews.length; j++) {

        sum = sum + raceReviews[j].overall;
        var avgRating = Math.round(sum / count * 100) / 100;

      };
      averages.push(avgRating);
      var ratingsObj = {
        id: searchResults[i].id,
        totalScore: averages
      };
      ratingsArr.push(ratingsObj);
    }
    console.log("Ratings array: " + JSON.stringify(ratingsArr));
    return ratingsArr;
  };


  app.post("/race/:id", function (req, res) {
    console.log(req.params.id);
    let raceAgain = req.body.race_again;
    let boolean;
    if (raceAgain === 'Hell yeah!') {
      boolean = 1;
    } else {
      boolean = 0;
    }

    db.Review.create({
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
      overall: req.body.overall,
      race_again: boolean,
      highlight: req.body.highlight,
      comments: req.body.comments,
      RaceId: req.params.id,
    }).then(function () {
      res.redirect('/race/' + req.params.id);
    });
  });
};
