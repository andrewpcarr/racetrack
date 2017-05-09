var db = require("../models");


module.exports = function (app) {
  app.get("/api/race", function (req, res) {
    // 1. Add a join to include all 
    db.Race.findAll({}).then(function (dbRace) {
      res.json(dbRace);
      console.log(JSON.stringify(dbRace[0]));  // console logging out first race to check that it works
    });
  });

  //  

 /* app.get("/api/race/:name", function (req, res) {
    console.log("req params: " + req.params.name);
    db.Race.findAll({
      where: {
        race_name: req.params.name, 
        //city: req.params.city,
        //distance: req.params.distance,
       // swim_start: req.params.swimstart     
      },
      include: [db.Review]
    }).then(function (dbRace) {
      res.json(dbRace);
      //console.log(JSON.stringify(dbRace));
      console.log("does this work?");
    });
    //console.log(dbRace); 
  });  */

   app.get("/api/race/results", function(req, res) {
    console.log("bueller?  bueller?" + req.body.name);
    db.Race.findAll({
      where: {
      race_name: req.body.name,
     race_month: req.body.month,
     city: req.body.city,
      distance: req.body.distance, 
     swim_start: req.body.start
      } 
    })
    .then(function(dbRace) {
      res.json(dbRace);
    });
  });

};
