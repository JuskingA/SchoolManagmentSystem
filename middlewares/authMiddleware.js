const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to verify roles
function authorizeRoles(allowedRoles) {
  return (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!allowedRoles.includes(decoded.roleId)) {
        return res.status(403).json({ message: 'Access forbidden: You do not have the correct role' });
      }
      next();
    } catch (err) {
      res.status(400).json({ message: 'Invalid token' });
    }
  };
}

module.exports = authorizeRoles;
