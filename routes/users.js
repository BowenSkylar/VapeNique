const userRouter = require('express').Router()
const { createUser, authenticate } = require('../models/users.js')

userRouter.route('/signup')
  .post(createUser, (req, res, next) => res.json({message: 'The user succesfully signed up'}));

userRouter.route('/login')
  .post(authenticate, (req, res, next) => res.json({message: 'The user succesfully logged in'}));

module.exports = userRouter;
