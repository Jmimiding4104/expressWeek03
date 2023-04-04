var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');

var postsRouter = require('./routes/posts');

var app = express();

const connections = require('./connections');
const http = require('./controllers/http')

//connections();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

connections();

app.use('/posts', postsRouter);

// 404
app.use(function(req, res, next) {
    http.notFound(req, res)
  });

module.exports = app;