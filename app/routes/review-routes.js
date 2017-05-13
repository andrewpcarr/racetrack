
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/api/reviews", function (req, res) {
        var query = {};
        if (req.query.race_id) {
            query.RaceId = req.query.race_id;
        }
        db.Review.findAll({
            where: query,
            include: [db.Race]
        }).then(function (dbReview) {
            res.json(dbReview);
            //console.log(JSON.stringify(dbReview[0]));
        });
    });

    app.get("/api/reviews/:id", function (req, res) {
        db.Review.findAll({
            where: {
                raceId: req.params.id,
            },
            include: [db.Race]
        }).then(function (dbReview) {
            res.json(dbReview); 
        })
    });
}; 



