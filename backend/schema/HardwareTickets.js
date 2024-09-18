const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Ticket = require('./Ticket');

const HardwareTicket = sequelize.define('HardwareTicket', {
  TicketID: {
    type: DataTypes.INTEGER,
    references: {
      model: Ticket,
      key: 'TicketID'
    },
    primaryKey: true
  },
  DeviceSerialNumber: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  Picture: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'HardwareTickets',
  timestamps: false
});

HardwareTicket.belongsTo(Ticket, { foreignKey: 'TicketID' });

module.exports = HardwareTicket;