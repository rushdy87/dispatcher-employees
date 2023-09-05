const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Users = require('./users');
const JobTitles = require('./job-titles');
const Degrees = require('./degrees');

const Employees = sequelize.define('Employees', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: Sequelize.ENUM('ملاك', 'عقد'),
  workday: Sequelize.ENUM('صباحي', 'مناوب'),
  unit: Sequelize.STRING,
  specialist_degree: Sequelize.STRING,
  joining_date: Sequelize.DATEONLY,
  phone_number: Sequelize.STRING,
  birthdate: Sequelize.DATEONLY,
  address: Sequelize.STRING,
  gender: Sequelize.ENUM('ذكر', 'أنثى'),
});

Users.belongsTo(Users, { foreignKey: 'user_id' });
Users.hasMany(Employees, { foreignKey: 'user_id' });

Employees.belongsTo(JobTitles, { foreignKey: 'job_title' });

Employees.belongsTo(Degrees, { foreignKey: 'degree' });

module.exports = Employees;
