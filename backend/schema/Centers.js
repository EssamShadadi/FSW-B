const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Location = sequelize.define('Center', {
    LocationID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    LocationName: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false
    }
  }, {
    tableName: 'Centers',
    timestamps: false
  });
  
  module.exports = Location;