const sequelize = require('../config/connection.js');
const User = require('./userModel.js');
const Trip = require('./tripModel.js');
const Comment = require('./commentModel.js');

// Define associations between models if needed
User.hasMany(Comment, { foreignKey: 'userid1' });
User.hasMany(Trip, { foreignKey: 'userid' });

Trip.belongsTo(User, { foreignKey: 'userid' });
Trip.hasMany(Comment, { foreignKey: 'tripid2' });

Comment.belongsTo(User, { foreignKey: 'userid1' });
Comment.belongsTo(Trip, { foreignKey: 'tripid2' });

module.exports = {
  sequelize,
  User,
  Trip,
  Comment,
};