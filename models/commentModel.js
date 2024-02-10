const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js'); 


class Comment extends Model {}

Comment.init({
  commentid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userid: {
    type: DataTypes.INTEGER,
  },
  tripid: {
    type: DataTypes.INTEGER,
  },
  content: {
    type: DataTypes.STRING,
  },
  createdon: {
    type: DataTypes.DATE,
  },
  tripid2: {
    type: DataTypes.INTEGER,
  },
  userid1: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize,
  modelName: 'Comment',
});

// Associations
// Comment.belongsTo(User, { foreignKey: 'userid1' });
// Comment.belongsTo(Trip, { foreignKey: 'tripid2' });

module.exports = Comment;