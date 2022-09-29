const express = require('express');
const formidable = require('express-formidable');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(formidable());

const responseObj = {};

const db = {};

app.post('/login', (req, res) => {
  let base = fs.readFileSync('users.json', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    }
    return data;
  });

  let dannie = JSON.parse(base);

  console.log(dannie);

  if (
    dannie.hasOwnProperty(req.fields.userName) &&
    dannie[req.fields.userName] === req.fields.userPassword
  ) {
    responseObj.message = `Welcome, ${req.fields.userName}!`;
  } else {
    responseObj.message = 'invalid login or password!';
  }

  res.json(responseObj);
});

app.post('/signUp', (req, res) => {
  let base = fs.readFileSync('users.json', 'utf-8');

  let dannie = JSON.parse(base);

  if (req.fields.userPassword === req.fields.rePassword) {
    if (dannie.hasOwnProperty(req.fields.userName)) {
      responseObj.message = `User ${req.fields.userName} in use!`;
    } else {
      let uName = req.fields.userName;
      let pass = req.fields.userPassword;
      let obj2 = { [uName]: pass };
      Object.assign(dannie, obj2);

      let users = JSON.stringify(dannie);

      fs.writeFileSync('users.json', users, (err) => console.log(err));

      responseObj.message = `New user ${req.fields.userName} is created`;
    }
  } else {
    responseObj.message = `Passwords do not match`;
  }

  res.json(responseObj);
});

// app.use(express.static('static'))

app.listen(7000, () => {
  console.log('Server listens on 7000 port');
});
