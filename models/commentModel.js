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
    allowNull: false,
    defaultValue: 1,
  },
  tripid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdon: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  tripid2: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  userid1: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
}, {
  sequelize,
  modelName: 'Comment',
});


module.exports = Comment;