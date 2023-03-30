const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(Candidate) {
      this.belongsTo(Candidate, { foreignKey: 'candidate_id' });
    }
  }
  Comment.init(
    {
      candidate_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Candidates',
          key: 'id',
        },
      },
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    },
  );
  return Comment;
};
