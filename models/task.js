'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User, {foreignKey : 'userId'}),
      Task.belongsTo(models.Category, {foreignKey : 'categoryId'})
    }
  };
  Task.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : true,
        notNull : true
      }
    },
    categoryId: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notEmpty : true,
        notNull : true
      }
    },
    userId : {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : true
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};