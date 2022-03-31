'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectTask extends Model {
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProjectTask.belongsTo(models.Projects, {foreignKey : 'projectId'})
      ProjectTask.belongsTo(models.Task, {foreignKey : 'taskId'})
    }
  };
  ProjectTask.init({
    projectId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProjectTask',
  });
  return ProjectTask;
};