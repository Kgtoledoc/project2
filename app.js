const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const app = express();

const myDB = 'mongodb://localhost/advancedproject1'
const User = require('./Models/user.model.js');
const UserRoutes = require('./Controllers/userroutes.js');
const bodyParser = require('body-parser');

port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}))

mongoose.connect(myDB);
app.use('/user', UserRoutes);

app.listen(port, (err) => {
  if (!err) {
    console.log(`Listening in port ${port}`);
  } else {
    console.log(err);
  }
})
