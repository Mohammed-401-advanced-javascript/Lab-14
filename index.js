/* eslint-disable strict */
'use strict';

require('dotenv').config();
const server = require('./src/server');


// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser:true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options);
server.start(process.env.PORT);