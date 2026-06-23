"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Teachers", "class", "t_class");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Teachers", "t_class", "class");
  },
};
