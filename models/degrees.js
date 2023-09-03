const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Users = require('./users');

const Degrees = sequelize.define('Degrees', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  degree_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  specialization: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Degrees.belongsTo(Users, { foreignKey: 'user_id' });
Users.hasMany(Degrees, { foreignKey: 'user_id' });

module.exports = Degrees;
