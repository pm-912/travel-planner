const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/sequelize')

class User extends Model { 
  async checkPassword(loginPw) {
    return await bcrypt.compare(loginPW, this.password);
  }
}

User.init({
  userid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }, 
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING, 
  },
  password: {
    type: DataTypes.STRING,
  },
}, { 
  sequelize,
  modelName: 'User',
});

// Define associations
User.hasMany(Comment, { foreignKey: 'userid1' });
User.hasMany(Trip, { foreignKey: 'userid' });

module.exports = User;