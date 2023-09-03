const express = require('express');

const sequelize = require('./util/database');
const User = require('./models/user');

const employeesRoutes = require('./routes/employees');

const PORT = 3030;

const app = express();

app.use(express.json());

app.use('/employees', employeesRoutes);

sequelize
  // .sync({ force: true })
  .sync()
  .then((result) => {
    return User.findByPk(1);
    // console.log(result);
  })
  .then((user) => {
    if (!user) {
      return User.create({
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
