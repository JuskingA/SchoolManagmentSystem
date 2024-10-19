const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

async function loginUser(email, password) {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('User not found');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error('Invalid password');

  // Create a JWT token
  const token = jwt.sign({ id: user.id, roleId: user.roleId }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return { token, user };
}

module.exports = { loginUser };
