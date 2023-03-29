"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Interviewers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      number: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      zoom: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      skype: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Interviewers");
  },
};
