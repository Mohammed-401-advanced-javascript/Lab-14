/* eslint-disable new-cap */
/* eslint-disable strict */
'use strict';

const express = require('express');
const authRouter = express.Router();
const Users = require('./users.js');
const basicAuth = require('./basic-auth-middleware.js');
const oauth = require('./oauthmiddleware.js');
const bearerAuth = require('./bearer-auth-middleware.js');

authRouter.post('/signup', (req, res,next) => {
  let user = new Users(req.body);
  user.save()
    .then(data => {
      let token = user.generateToken(data);
      res.status(200).send(token);
    }).catch(next);
});

authRouter.post('/signin', basicAuth, (req, res) => {
  res.status(200).send(req.token);
});

authRouter.get('/users',(req, res) => {
  Users.list()
    .then(data=>{
      res.status(200).json(data);
    });
});

authRouter.get('/oauth', oauth, (req, res) => {
  res.status(200).send(req.token);
});

authRouter.get('/user', bearerAuth, (req, res) => {
  res.status(200).json(req.user);
});


module.exports = authRouter;