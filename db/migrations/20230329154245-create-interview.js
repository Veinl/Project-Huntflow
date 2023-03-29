'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Interviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      interview_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Interviewers",
          key: "id",
        },
      },
      candidate_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Candidates",
          key: "id",
        },
      },
      date: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Interviews');
  }
};