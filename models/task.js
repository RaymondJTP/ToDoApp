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
      Task.belongsTo(User, {foreignKey : 'userId'}),
      Task.belongsTo(Category, {foreignKey : 'categoryId'})
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
      },
      references : {
        model : Category,
        key : 'id'
      }
    },
    userId : {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty : true,
        notNull : true
      },
      references : {
        model : User,
        key : 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};