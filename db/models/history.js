"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    static associate({ Candidate }) {
      this.belongsTo(Candidate, { foreignKey: "candidate_id" });
    }
  }
  History.init(
    {
      candidate_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Candidates",
          key: "id",
        },
      },
      invite_message_date: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      screencall_pass_date: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      videocall_pass_date: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      offer_date: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      offer_accept_date: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};
