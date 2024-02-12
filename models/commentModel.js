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
  },
  userid1: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Comment',
});


module.exports = Comment;