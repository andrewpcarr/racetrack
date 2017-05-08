module.exports = function (sequelize, DataTypes) {
  var Race = sequelize.define("Race", {
    // Giving the Race model a name of type STRING
    race_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    overall: {
      type: DataTypes.FLOAT
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    venue: {
      type: DataTypes.STRING
    },
    distance: {
      type: DataTypes.STRING
    },
    race_month: {
      type: DataTypes.STRING,
      allowNull: false
    },
    water_type: {
      type: DataTypes.STRING
    },
    swim_start: {
      type: DataTypes.STRING
    },
    bike_course: {
      type: DataTypes.STRING
    },
    run_type: {
      type: DataTypes.STRING
    },
    women_only: {
      type: DataTypes.BOOLEAN
    },
    logo: {
      type: DataTypes.STRING
    },
  },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our RAce to have Reviews
      timestamps: false, 
      classMethods: {
        associate: function (models) {
          // Associating Race with Reviews
          //
          Race.hasMany(models.Review, {
            onDelete: "cascade"
          });
        }
      }
    }
  );

  return Race;
};
