const { Sequelize } = require('sequelize');
// Initialize Sequelize with your database configuration
const sequelize = new Sequelize('ticketing', 'root', {
  host: '127.0.0.1',   
  port: 3306,            
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;