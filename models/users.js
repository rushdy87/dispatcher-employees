const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Users = sequelize.define('Users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  authorization_level: {
    type: Sequelize.ENUM('1', '2'),
    allowNull: false,
  },
});

module.exports = Users;
