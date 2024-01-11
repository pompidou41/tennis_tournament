'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        name: 'Турнир 1',
        status: 'open',
        team_id: 1 && 2,
      },
    ];

    const newData = data.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Tournaments', newData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tournaments', null, {});
  },
};
