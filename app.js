const express = require('express');

const sequelize = require('./util/database');
const Users = require('./models/users');
const JobTitles = require('./models/job-titles');
const Degrees = require('./models/degrees');
const Employees = require('./models/employees');

const employeesRoutes = require('./routes/employees');
const degreesRoutes = require('./routes/degrees');
const jobTitlesRoutes = require('./routes/job-titles');

const PORT = 3030;

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use((req, res, next) => {
  Users.findByPk(1)
    .then((user) => {
      req.user = user;
      // console.log(user.dataValues);
      next();
    })
    .catch((err) => console.log(err));
});

// Routes
app.use('/employees', employeesRoutes);
app.use('/degrees', degreesRoutes);
app.use('/job-titles', jobTitlesRoutes);

// Employees.bulkCreate([]);

sequelize
  // .sync({ force: true })
  .sync()
  .then((result) => {
    return Users.findByPk(1);
    // console.log(result);
  })
  .then((user) => {
    if (!user) {
      return Users.create({
        name: 'Super',
        username: 'super',
        password: 'super',
        authorization_level: 1,
      });
    }
    return user;
  })
  .then((user) => {
    // console.log(user);
    app.listen(PORT, () =>
      console.log(`The server is running on Port (${PORT})`)
    );
  })
  .catch((err) => {
    console.log(err);
  });

/*
[
 
 
 
]
*/
