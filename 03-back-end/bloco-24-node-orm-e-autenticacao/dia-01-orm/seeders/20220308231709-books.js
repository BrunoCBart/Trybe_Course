'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Books', 
    [{title: 'Ego is your enemy', page_quantity: 300}],
    )
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Books', null, {})
  }
};
