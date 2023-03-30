'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      
    }
  }
  User.init({
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};