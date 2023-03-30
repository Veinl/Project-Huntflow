/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Histories', {
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
          model: 'Candidates',
          key: 'id',
        },
      },
      invite: {
        type: Sequelize.TEXT,
      },
      screencall: {
        type: Sequelize.TEXT,
      },
      videocall: {
        type: Sequelize.TEXT,
      },
      offer_date: {
        type: Sequelize.TEXT,
      },
      offer_accepted: {
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
    await queryInterface.dropTable('Histories');
  },
};
