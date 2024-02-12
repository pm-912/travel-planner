const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Trip extends Model {}

Trip.init({
  tripid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  destination: { // not null
    type: DataTypes.STRING,
  },
  stayLength: { // null, default value
    type: DataTypes.INTEGER,
  },
  departureDate: { //null
    type: DataTypes.DATE,
  },
  accommodation: { //null
    type: DataTypes.STRING,
  },
  public: { // not null default value private?
    type: DataTypes.BOOLEAN,
  },
}, {
  sequelize,
  modelName: 'Trip',
});

// Define associations
// Trip.belongsTo(User, { foreignKey: 'userid' });
// Trip.hasMany(Comment, { foreignKey: 'tripid2' });

module.exports = Trip;