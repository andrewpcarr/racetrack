
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    app.get("/api/review", function (req, res) {
        // 1. Add a join to include all 
        db.Review.findAll({
            include: [db.Race]
        }).then(function (dbReview) {
            res.json(dbReview);
            console.log(JSON.stringify(dbReview[0]));
        });
    });
};


