const express = require('express');
const { createCourse, getCourses } = require('../controllers/courseController');
const authorizeRoles = require('../middlewares/roleMiddleware');
const router = express.Router();

router.post('/create', authorizeRoles([2]), createCourse); // Only teachers (roleId 2) can create courses
router.get('/my-courses', authorizeRoles([2]), getCourses); // Teachers get their courses

module.exports = router;
