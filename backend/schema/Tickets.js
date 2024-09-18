const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const Ticket = sequelize.define('Ticket', {
  TicketID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  EmployeeID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Employee', 
      key: 'EmployeeID'
    },
    allowNull: true 
  },
  CenterID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Centers',
      key: 'CenterID'
    },
    allowNull: true 
  },
  IssueDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  Status: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'Tickets',
  timestamps: true 
});

module.exports = Ticket;
