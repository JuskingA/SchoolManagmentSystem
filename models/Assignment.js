const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./Course');

const Assignment = sequelize.define('Assignment', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Relationship between Assignment and Course
Assignment.belongsTo(Course, { foreignKey: 'courseId' });
Course.hasMany(Assignment, { foreignKey: 'courseId' });

module.exports = Assignment;
