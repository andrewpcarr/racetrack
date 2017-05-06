var db = require("../app/models");

module.exports = function(app) {
  app.get("/api/race", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Race.findAll({}).then(function(dbRace) {
      res.json(dbRace);
    });
  });
};
