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
  stay: {
    type: DataTypes.INTEGER,
  },
  departure: {
    type: DataTypes.DATE,
  },
  accomodation: {
    type: DataTypes.STRING,
  },
  public: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  modelName: 'Trip',
});

// Define associations
Trip.belongsTo(User, { foreignKey: 'userid' });
Trip.hasMany(Comment, { foreignKey: 'tripid2' });

module.exports = Trip;