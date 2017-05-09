module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_name: DataTypes.STRING,
    image: DataTypes.BLOB
  },
    {
      // We're saying that we want our Author to have Posts
      timestamps: false, 
      classMethods: {
        associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          User.hasMany(models.Review, {
            onDelete: "cascade"           
          });
        }
      }
    }
  );
  return User;
};
