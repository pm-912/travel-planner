const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

class Trip extends Model {}

Trip.init({
  tripid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  destination: {
    type: DataTypes.STRING,
  },
  stayLength: {
    type: DataTypes.INTEGER,
  },
  departureDate: {
    type: DataTypes.DATE,
  },
  accomodation: {
    type: DataTypes.STRING,
  },
  public: {
    type: DataTypes.BOOLEAN,
  },
}, {
  sequelize,
  modelName: 'Trip',
});

// Define associations
Trip.belongsTo(User, { foreignKey: 'userid' });
Trip.hasMany(Comment, { foreignKey: 'tripid2' });

module.exports = Trip;