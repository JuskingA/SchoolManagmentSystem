const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Course = require('./Course');

const Enrollment = sequelize.define('Enrollment', {
  grade: {
    type: DataTypes.FLOAT,
    allowNull: true, // Optional, because students may not have a grade yet
  },
});

// Relationships
User.belongsToMany(Course, { through: Enrollment, foreignKey: 'studentId' });
Course.belongsToMany(User, { through: Enrollment, foreignKey: 'courseId' });

module.exports = Enrollment;
