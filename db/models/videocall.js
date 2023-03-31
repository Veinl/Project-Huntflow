const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Videocall extends Model {
    static associate({ Interviewer, Candidate }) {
      this.belongsTo(Candidate, { foreignKey: 'candidate_id' });
      this.belongsTo(Interviewer, { foreignKey: 'interviewer_id' });
    }
  }
  Videocall.init(
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
      modelName: 'Videocall',
    }
  );
  return Videocall;
};
