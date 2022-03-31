'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Projects', [
      {
        name: 'Project Coffee Shop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Company Profile',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sipil',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Projects', null);
  }
};
