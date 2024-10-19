const sequelize = require('./config/database');
const User = require('./models/User');
const Course = require('./models/Course');
const Enrollment = require('./models/Enrollment');
const Assignment = require('./models/Assignment');
const Submission = require('./models/Submission');

sequelize.sync({ force: false }) // force: true will drop and recreate tables every time the server restarts
  .then(() => {
    console.log('Database & tables synced successfully!');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
