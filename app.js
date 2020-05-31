const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
//http请求的日志中间件
const logger = require('morgan');
const debug = require('debug')('node/exepress::app');
let path = require('path');

const indexRouter = require('./routes/index');

let app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/node_exepress/v1', indexRouter);

/**
 * CORS support. 
 */
app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'origin, content-type, accept, authorization');
  res.set('Access-Control-Allow-Credentials', 'true');
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  debug('req.app.env' + req.app.get('env'));
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
