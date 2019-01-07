var db = require("../models");

module.exports = function(app) {
  app.get("/api/race", function(req, res) {
    // 1. Add a join to include all 
    db.Race.findAll({
      include: [db.Review]
    }).then(function(dbRace) {
      res.json(dbRace);
    });
  });

  app.get("/api/race/:id", function(req, res) {
    db.Race.findAll({
      where: {
        id: req.params.id,
        //city: req.params.city,
        //distance: req.params.distance,
        // swim_start: req.params.swimstart     
      },
      include: [db.Review]
    }).then(function(dbRace) {
      res.json(dbRace);
      console.log("does this work?");
    });
  });
};
