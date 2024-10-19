const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Assignment = require('./Assignment');
const User = require('./User');

const Submission = sequelize.define('Submission', {
  fileUrl: {
    type: DataTypes.STRING,
    allowNull: false, // The location where the submitted file is stored
  },
  grade: {
    type: DataTypes.FLOAT,
    allowNull: true, // Teachers will grade this later
  },
  feedback: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// Relationships
Submission.belongsTo(User, { foreignKey: 'studentId' });
Submission.belongsTo(Assignment, { foreignKey: 'assignmentId' });

module.exports = Submission;
