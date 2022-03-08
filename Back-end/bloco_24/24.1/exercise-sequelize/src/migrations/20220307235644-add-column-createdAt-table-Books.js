'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Books', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE,
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.removeColumn('Books', 'createdAt')
  }
};
