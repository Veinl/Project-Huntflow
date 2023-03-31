const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    static associate({ Interview, History, Screencall, Videocall, Comment }) {
      this.hasMany(Interview, { foreignKey: 'candidate_id' });
      this.hasMany(History, { foreignKey: 'candidate_id' });
      this.hasMany(Screencall, { foreignKey: 'candidate_id' });
      this.hasMany(Videocall, { foreignKey: 'candidate_id' });
      this.hasMany(Comment, { foreignKey: 'candidate_id' });
    }
  }
  Candidate.init(
    {
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      experience: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      number: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
        unique: true,
      },
      invite: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      screencall: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      videocall: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      offer_date: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      offer_accepted: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      reject_status: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Candidate',
    }
  );
  return Candidate;
};
