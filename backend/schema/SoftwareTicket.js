const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Ticket = require('./Ticket');

const SoftwareTicket = sequelize.define('SoftwareTicket', {
  TicketID: {
    type: DataTypes.INTEGER,
    references: {
      model: Ticket,
      key: 'TicketID'
    },
    primaryKey: true
  },
  OSVersion: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  AffectedSoftware: {
    type: DataTypes.ENUM('Office', 'Adobe Acrobat', 'Chrome', 'X-Gate', 'P&L', 'QuickBooks', 'BOB'),
    allowNull: true
  },
  ErrorCode: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  Screenshot: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'SoftwareTickets',
  timestamps: false
});

SoftwareTicket.belongsTo(Ticket, { foreignKey: 'TicketID' });

module.exports = SoftwareTicket;