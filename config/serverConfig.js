const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');

const session = require('express-session');

const ssr = require('../middleware/ssr');

const sessionConfig = require("./sessionConfig");
const { getUser } = require('../middleware/auth');

const serverConfig = (app) => {
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(ssr);
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(getUser);
};

module.exports = serverConfig;
