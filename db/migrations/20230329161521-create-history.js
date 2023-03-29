"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Histories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      candidate_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Candidates",
          key: "id",
        },
      },
      invite_message_date: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      screencall_pass_date: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      videocall_pass_date: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      offer_date: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      offer_accept_date: {
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
  async down(queryInterface) {
    await queryInterface.dropTable("Histories");
  },
};
