'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        name: 'Vlad',
        email: 'vladne@mail.ru',
        password: await bcrypt('123456', 10),
        isAdmin: true,
        tournament_id: null,
      },
      {
        name: 'Tolya',
        email: 'tolyane@mail.ru',
        password: await bcrypt('123456', 10),
        isAdmin: false,
        tournament_id: 1,
      },
      {
        name: 'Anya',
        email: 'anyane@mail.ru',
        password: await bcrypt('123456', 10),
        isAdmin: false,
        tournament_id: 1,
      },
      {
        name: 'Yura',
        email: 'yurane@mail.ru',
        password: await bcrypt('123456', 10),
        isAdmin: false,
        tournament_id: 1,
      },
      {
        name: 'Ruslan',
        email: 'ruslanne@mail.ru',
        password: await bcrypt('123456', 10),
        isAdmin: false,
        tournament_id: 1,
      },
    ];

    const newData = data.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', newData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
