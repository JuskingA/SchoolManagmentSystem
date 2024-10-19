const Course = require('../models/Course');

async function createCourse(req, res) {
  const { title, description } = req.body;
  const teacherId = req.user.id; // Assuming teacher is logged in

  try {
    const course = await Course.create({ title, description, teacherId });
    res.status(201).json({ course });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getCourses(req, res) {
  try {
    const courses = await Course.findAll({ where: { teacherId: req.user.id } });
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { createCourse, getCourses };
