const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js')

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
  username: { // not null
    type: DataTypes.STRING,
  },
  email: {// not null
    type: DataTypes.STRING, 
  },
  password: {// not null
    type: DataTypes.STRING,
  },
}, { 
  sequelize,
  modelName: 'User',
});

// Define associations
// User.hasMany(Comment, { foreignKey: 'userid1' });
// User.hasMany(Trip, { foreignKey: 'userid' });

module.exports = User;