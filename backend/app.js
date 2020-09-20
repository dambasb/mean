const express = require('express');
const body = require('body-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');

const db = require('./db');

const app = express();

mongoose.connect('mongodb+srv://' + db.user + ':' + db.password + '@cluster0.kilap.mongodb.net/' + db.name + '?retryWrites=true&w=majority',
  { useNewUrlParser: true },
  { useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS, PUT');
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
