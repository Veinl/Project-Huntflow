const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Interviewer extends Model {
    static associate({ Interview, Screencall, Videocall }) {
      this.hasMany(Interview, { foreignKey: 'interviewer_id' });
      this.hasMany(Screencall, { foreignKey: 'interviewer_id' });
      this.hasMany(Videocall, { foreignKey: 'interviewer_id' });
    }
  }
  Interviewer.init(
    {
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
        unique: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      number: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      zoom: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      skype: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Interviewer',
    },
  );
  return Interviewer;
};
