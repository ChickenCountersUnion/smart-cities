const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const staticPath = process.env.STATIC_PATH || path.join(__dirname, '../../../dist');

module.exports = (app) => {
  app.use(morgan('dev'));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

  app.use(express.static(staticPath));
};
