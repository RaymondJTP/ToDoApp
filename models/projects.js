'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Projects.hasMany(models.ProjectTask, {foreignKey : 'projectId'})
      Projects.hasMany(models.ProjectUser, {foreignKey : 'projectId'})
    }
  };
  Projects.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};