'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [
        {
          firstName: 'Irfan',
          lastName: 'Mandu',
          email: 'irfanmandu@example.com',
          address: 'Bogor',
          age: 25,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Bang',
          lastName: 'Dimas',
          email: 'bangdimas@example.com',
          address : 'Karawang',
          age: 27,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null);
  }
};
