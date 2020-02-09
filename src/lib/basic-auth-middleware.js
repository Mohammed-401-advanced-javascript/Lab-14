/* eslint-disable strict */
'use strict';

// eslint-disable-next-line no-unused-vars
const base64 = require('base-64');
const Users = require('./users.js');

module.exports = (req, res, next) => {

  //   if(!req.headers.authorization) { next('invalid login'); }

  //   let basic = req.headers.authorization.split(' ').pop();
  //   console.log('req auth headers:', req.headers.authorization);
  //   console.log('basic:', basic);

  //   let [user, pass] = base64.decode(basic).split(':');
  //   let auth = {user, pass};

  //   console.log('decoded user/pw', auth);
  //   let newUser = new Users(auth);
  //   return Users.authenticateBasic(auth)
  //     .then(validUser => {
  //       console.log(validUser);
  //       req.token = newUser.generateToken(validUser);
  //       console.log('token:', req.token);
  //       next();
  //     }).catch(() => next('invalid login'));
  // };
  let [authType, encodedString] = req.headers.authorization.split(/\s+/);

  switch(authType.toLowerCase()) {
  case 'basic':
    return authBasic(encodedString);
  default:
    break;
  }

  function authBasic(authString) {
    let base64Buffer = Buffer.from(authString,'base64');
    let bufferString = base64Buffer.toString();
    let [username,password] = bufferString.split(':');
    let auth = {username,password};
    return Users.authenticateBasic(auth)
      .then( user =>{
        console.log(user);
        req.user = user;
        req.token = user.generateToken(user);
        next();
      });
  }
};