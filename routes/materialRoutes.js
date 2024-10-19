const express = require('express');
const { addMaterial, getMaterials } = require('../controllers/materialController');
const authorizeRoles = require('../middlewares/roleMiddleware');
const router = express.Router();

router.post('/add', authorizeRoles([2]), addMaterial); // Only teachers can upload materials
router.get('/course/:courseId', authorizeRoles([2, 3]), getMaterials); // Teachers and students can view materials

module.exports = router;
