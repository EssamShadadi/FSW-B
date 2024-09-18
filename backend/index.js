


// Import the express module
const express = require('express');
const sequelize = require('./sequelize');

const app = express();
const port = 5000;
async function startServer() {
    try {
      await sequelize.authenticate(); // Ensure connection is established
      console.log('Database connection has been established successfully.');
  
      await sequelize.sync({ alter: true }); // Sync models with the database (alter existing schema)
  
      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
    } catch (error) {
      console.error('Unable to connect to the database or start server:', error);
    }
  }
  startServer()