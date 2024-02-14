const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');


class Trip extends Model {}

Trip.init({
  tripid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stayLength: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 3
  },
  departureDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  accommodation: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  public: { 
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  userid: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize,
  modelName: 'Trip',
});


module.exports = Trip;