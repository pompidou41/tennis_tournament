"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tournament extends Model {
    static associate({ User, Team }) {
      this.hasMany(Team, { foreignKey: "tournament_id" });
      this.hasMany(User, { foreignKey: "tournament_id" });
    }
  }
  Tournament.init(
    {
      name: {
        defaultValue: "Турнир",
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      status: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Tournament",
    }
  );
  return Tournament;
};
