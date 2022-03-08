'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    return queryInterface.bulkInsert('Books', [
      {
        title: 'Admiravel Mundo Novo',
        author: 'Aldeos Huxley',
        pageQuantity: 250,
        createdAt: new Date(),
      },
      {
        title: 'Senhor dos Anéis',
        author: 'J.R.R. Tolkien',
        pageQuantity: 700,
        createdAt: new Date(),
      },
      {
        title: 'Kimetsu no Yaiba',
        author: 'Tanjiro Slayer',
        pageQuantity: 424,
        createdAt: new Date(),
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Books', null, {})
  }
};
