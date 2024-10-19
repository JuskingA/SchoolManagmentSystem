const { loginUser } = require('../services/authService');

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const { token, user } = await loginUser(email, password);
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = { login };
