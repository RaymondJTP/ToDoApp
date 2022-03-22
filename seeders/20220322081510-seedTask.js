'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', [
      {
        name: 'Membuat Skema',
        categoryId : 4,
        userId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Slicing Frontend',
        categoryId : 1,
        userId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Membuat Relasi',
        categoryId : 3,
        userId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Membuat End Point',
        categoryId : 2,
        userId : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null);
  }
};
