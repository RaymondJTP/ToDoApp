'use strict';
const {
  Model
} = require('sequelize');

const {hashPassword} = require('../helpers/bycript')


module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Task, {foreignKey : 'userId'})
      User.hasMany(models.ProjectUser, {foreignKey : 'userId'})
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
    age: DataTypes.INTEGER,
    role : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks : {
      beforeCreate : (user, options) => {
        user.password = hashPassword(user.password)
      }
    }
  });
  return User;
};