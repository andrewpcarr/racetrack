module.exports = function (sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    atmosphere: {
      type: DataTypes.INTEGER
    },
    swag: {
      type: DataTypes.INTEGER
    },
    aid_stations: {
      type: DataTypes.INTEGER
    },
    clarity: {
      type: DataTypes.INTEGER
    },
    sighting: {
      type: DataTypes.INTEGER
    },
    transition: {
      type: DataTypes.INTEGER
    },
    bike_hills: {
      type: DataTypes.INTEGER
    },
    road_surface: {
      type: DataTypes.INTEGER
    }
    ,
    run_hills: {
      type: DataTypes.INTEGER
    },
    run_shade: {
      type: DataTypes.INTEGER
    },
    overall: {
      type: DataTypes.INTEGER
    },
    race_again: {
      type: DataTypes.BOOLEAN
    },
    highlight: {
      type: DataTypes.TEXT("tiny")
    },
    comments: {
      type: DataTypes.TEXT
    }
  },
    {
      // We're saying that we want our Races to have Reviews
      timestamps: false,
      classMethods: {
        associate: function (models) {
          // A Race (foreignKey) is required or a Review can't be made
          Review.belongsTo(models.Race, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return Review;
};
