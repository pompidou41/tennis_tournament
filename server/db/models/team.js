'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate({ User, Tournament }) {
      this.belongsTo(User, { foreignKey: 'user1_id' || 'user2_id' });
      this.belongsTo(Tournament, { foreignKey: 'tournament_id' });
    }
  }
  Team.init(
    {
      user1_id: {
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
        type: DataTypes.INTEGER,
      },
      user2_id: {
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
        type: DataTypes.INTEGER,
      },
      tournament_id: {
        allowNull: false,
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
      modelName: 'Team',
    }
  );
  return Team;
};
