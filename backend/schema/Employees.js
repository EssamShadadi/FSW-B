const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Employee = sequelize.define('Employee', {
  EmployeeID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  EmployeeName: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  Location: {
    type: DataTypes.ENUM('HQ', 'Shatila', 'Nabaa', 'Tripoli', 'Bekaa'),
    allowNull: false
  }
}, {
  tableName: 'Employees',
  timestamps: false
});

module.exports = Employee;