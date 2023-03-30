const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    static associate({ Candidate }) {
      this.belongsTo(Candidate, { foreignKey: 'candidate_id' });
    }
  }
  History.init(
    {
      candidate_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Candidates',
          key: 'id',
        },
      },
      invite: {
        type: DataTypes.TEXT,
      },
      screencall: {
        type: DataTypes.TEXT,
      },
      videocall: {
        type: DataTypes.TEXT,
      },
      offer_date: {
        type: DataTypes.TEXT,
      },
      offer_accepted: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'History',
    },
  );
  return History;
};
