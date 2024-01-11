'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tournament extends Model {
    static associate({ User, Team }) {
      this.belongsTo(Team, { foreignKey: 'team_id' });
      this.hasMany(User, { foreignKey: 'user_id' });
    }
  }
  Tournament.init(
    {
      name: {
        defaultValue: 'Турнир',
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
      team_id: {
        allowNull: false,
        references: {
          model: 'Teams',
          key: 'id',
        },
        onDelete: 'cascade',
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Tournament',
    }
  );
  return Tournament;
};
