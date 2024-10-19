const express = require('express');
const app = express();
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');

// Middleware
app.use(express.json());
app.use('/api/auth', authRoutes);

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
