const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ITSpecialist = sequelize.define('ITSpecialist', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    responsibleLocations: {
        type: DataTypes.JSON, 
        allowNull: false,
    }
}, {
    timestamps: false,
});

export default ITSpecialist