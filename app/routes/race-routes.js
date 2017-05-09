var db = require("../models");

module.exports = function (app) {
  app.get("/api/race", function (req, res) {
    // 1. Add a join to include all 
    db.Race.findAll({}).then(function (dbRace) {
      res.json(dbRace);
      console.log(JSON.stringify(dbRace[0]));  // console logging out first race to check that it works
    });
  });
 
//  TH on 5/8--CAN'T GET THE FOLLOWING TO WORK.  WHY?????
/*
  app.get("api/race/:id?", function (req, res) {
    console.log("req params: " + req.params.id);
    db.Race.findOne({
      where: {
        id: req.params.id
      },
      //include: [db.Review]
    }).then(function (dbRace) {
     res.json(dbRace);
      console.log(dbRace);
      console.log("does this work?");
    });
    //console.log(dbRace); 
  });
*/
}; 

 