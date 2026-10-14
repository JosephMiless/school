'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Students', 'account_id', {
      type: Sequelize.UUID,
      allowNull: false,
      unique: true,
      references: {
        model: 'User_Accounts',
        key: 'id'
      }
    });

    await queryInterface.addColumn('Teachers', 'account_id', {
      type: Sequelize.UUID,
      allowNull: false,
      unique: true,
      references: {
        model: 'User_Accounts',
        key: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Students', 'account_id');
    await queryInterface.removeColumn('Teachers', 'account_id');
  }
};
