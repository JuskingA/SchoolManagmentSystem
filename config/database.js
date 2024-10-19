const { Sequelize } = require('sequelize');

// Database connection
const sequelize = new Sequelize('school_management', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Disable SQL logging in the console
});

module.exports = sequelize;
