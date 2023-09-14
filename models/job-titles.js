const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Users = require('./users');

const JobTitles = sequelize.define('JobTitles', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title_name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
});

JobTitles.belongsTo(Users, { foreignKey: 'user_id' });
Users.hasMany(JobTitles, { foreignKey: 'user_id' });

module.exports = JobTitles;

// const data = [
//   {
//     title_name: ' مهندس اقدم',
//   },
//   {
//     title_name: 'حارس ثاني ',
//   },
//   {
//     title_name: 'حرفي',
//   },
//   {
//     title_name: 'حرفي اقدم ',
//   },
//   {
//     title_name: 'حرفي اول',
//   },
//   {
//     title_name: 'ر. حرفيين',
//   },
//   {
//     title_name: 'ر. حرفيين اقدم',
//   },
//   {
//     title_name: 'ر. مهندسين اقدم',
//   },
//   {
//     title_name: 'ر.ملاحظين فني',
//   },
//   {
//     title_name: 'ر.مهندسين',
//   },
//   {
//     title_name: 'سائق خفيفة ',
//   },
//   {
//     title_name: 'فني',
//   },
//   {
//     title_name: 'كاتب',
//   },
//   {
//     title_name: 'م. مدير فني',
//   },
//   {
//     title_name: 'م. ملاحظ فني',
//   },
//   {
//     title_name: 'م.حرفي',
//   },
//   {
//     title_name: 'م.ر حراس',
//   },
//   {
//     title_name: 'م.ر حرفيين',
//   },
//   {
//     title_name: 'م. ر. مهندسين',
//   },
//   {
//     title_name: 'م. ر. مبرمجين ',
//   },
//   {
//     title_name: 'م. مدير ',
//   },
//   {
//     title_name: 'م.مساح',
//   },
//   {
//     title_name: 'م.مشغل شعبة ',
//   },
//   {
//     title_name: 'م.مهندس',
//   },
//   {
//     title_name: 'مدير فني',
//   },
//   {
//     title_name: 'مدير فني اقدم',
//   },
//   {
//     title_name: 'ملاحظ فني',
//   },
//   {
//     title_name: 'مهندس',
//   },
//   {
//     title_name: 'مهندس',
//   },
//   {
//     title_name: 'مهندس اقدم',
//   },
//   {
//     title_name: 'مهندس تقني',
//   },
// ];
