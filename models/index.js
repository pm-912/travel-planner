const sequelize = require('../config/sequelize');
const User = require('./User');
const Trip = require('./Trip');
const Comment = require('./Comment');

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