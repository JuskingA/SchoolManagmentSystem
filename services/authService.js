const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Role = require('../models/Role');
require('dotenv').config();

async function registerUser(name, email, password, roleName) {
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const role = await Role.findOne({ where: { name: roleName } });
  if (!role) {
    throw new Error('Role not found');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    roleId: role.id,
  });

  return user;
}

module.exports = { registerUser };
