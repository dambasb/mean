const express = require('express');
const body = require('body-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/posts', (req, res, next) => {

  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added'
  });
});

app.get('/api/posts',(req, res, next) => {

  const posts = [
    {
      id: '1',
      title: 'First post',
      content: 'Post from the express'
    },
    {
      id: '1',
      title: 'Second post',
      content: 'Post from the server'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
