const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js')

class User extends Model { 
  async checkPassword(loginPW) {
    return await bcrypt.compare(loginPW, this.password)
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
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  hooks: {
    beforeCreate: async (newUserData) => {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    },
    beforeUpdate: async (updatedUserData) => {
      if (updatedUserData.password) { updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)};
      return updatedUserData;
    },
  },
  sequelize,
  modelName: 'User',
});

module.exports = User;