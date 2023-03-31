const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Screencall extends Model {
    static associate({ Candidate, Interviewer }) {
      this.belongsTo(Candidate, { foreignKey: 'candidate_id' });
      this.belongsTo(Interviewer, { foreignKey: 'interviewer_id' });
    }
  }
  Screencall.init(
    {
      interviewer_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Interviewers',
          key: 'id',
        },
      },
      candidate_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Candidates',
          key: 'id',
        },
      },
      date: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Screencall',
    },
  );
  return Screencall;
};
