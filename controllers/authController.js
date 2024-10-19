const { registerUser } = require('../services/authService');

async function register(req, res) {
  const { name, email, password, role } = req.body;

  try {
    const user = await registerUser(name, email, password, role);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = { register };
