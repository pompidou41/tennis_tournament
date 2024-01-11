'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        user1_id: 2,
        user2_id: 4,
        tournament_id: 1,
      },
      {
        user1_id: 3,
        user2_id: 5,
        tournament_id: 1,
      },
    ];

    const newData = data.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Teams', newData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Teams', null, {});
  },
};
