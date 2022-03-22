'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(Task, {foreignKey : 'userId'})
    }
  };
  User.init({
    firstName: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : true,
        notNull : true
      }
    },
    lastName: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : true,
        notNull : true
      }
    },
    email : {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
      validate : {
        isEmail : true,
        notEmpty : true
      }
    },
    password : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : true,
        notNull : true
      }
    },
    address: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};