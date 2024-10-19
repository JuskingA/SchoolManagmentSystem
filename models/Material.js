const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./Course');

const Material = sequelize.define('Material', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contentUrl: {
    type: DataTypes.STRING, // URL for materials like PDFs, videos
    allowNull: false,
  },
  courseId: {
    type: DataTypes.INTEGER,
    references: {
      model: Course,
      key: 'id',
    },
  },
});

Material.belongsTo(Course, { foreignKey: 'courseId' });

module.exports = Material;
