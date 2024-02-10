const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js'); 


class Comment extends Model {}

Comment.init({
  commentid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userid: { // not null
    type: DataTypes.INTEGER,
  },
  tripid: { // not null
    type: DataTypes.INTEGER,
  },
  content: { // not null
    type: DataTypes.STRING,
  },
  createdon: { // not null maybe do auto timestamp?
    type: DataTypes.DATE,
  },
  tripid2: { // not null
    type: DataTypes.INTEGER,
  },
  userid1: { // not null
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