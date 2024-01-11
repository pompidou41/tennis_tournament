'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Tournament, Team }) {
      this.belongsTo(Tournament, { foreignKey: 'tournament_id' });
      this.hasMany(Team, { foreignKey: 'user1_id' || 'user2_id' });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      avatar: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      isAdmin: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      tournament_id: {
        allowNull: true,
        defaultValue: null,
        references: {
          model: 'Tournaments',
          key: 'id',
        },
        onDelete: 'cascade',
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
