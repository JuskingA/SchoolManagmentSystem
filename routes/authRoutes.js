const express = require('express');
const router = express.Router();
const authorizeRoles = require('../middlewares/roleMiddleware');
const { createUser } = require('../controllers/userController');

// Only allow Admins to access this route (roleId 1 is Admin)
router.post('/create', authorizeRoles([1]), createUser);

module.exports = router;
