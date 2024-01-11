'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        text: 'Here are some text to interact with. I can do what i want abcdf',
        isDone: false,
      },
      {
        text: 'Сделать компонент, в котором будет форма из текстового поля и кнопки. У этого компонента есть',
        isDone: true,
      },
      {
        text: 'Добавить возможность изменения названия задачb',
        isDone: false,
      },
    ];

    const newData = data.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Todos', newData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {});
  },
};
