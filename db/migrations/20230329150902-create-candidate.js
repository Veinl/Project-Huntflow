/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      image: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      experience: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      number: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: true,
      },
      invite: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      screencall: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      videocall: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      interview: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },

      offer_date: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      offer_accepted: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      reject_status: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('Candidates');
  },
};
