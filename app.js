const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const app = express();

port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (!err) {
    console.log(`Listening in port ${port}`);
  } else {
    console.log(err);
  }
})
