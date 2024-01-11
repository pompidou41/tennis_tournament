'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user1_id: {
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
        type: Sequelize.INTEGER,
      },
      user2_id: {
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Teams');
  },
};
