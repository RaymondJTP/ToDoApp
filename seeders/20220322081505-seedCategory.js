'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Plan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Start',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Progres',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Done',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null);
  }
};
