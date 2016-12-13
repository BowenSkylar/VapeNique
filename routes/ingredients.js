const router = require('express').Router();
const { createUser, authenticate } = require('../models/users.js')
const { getIngredients, addIngredients } = require('../models/ingredients.js');

const sendResponse = (req, res) => res.json(res.data);
const sessionErrorHandler = (err, req, res, next) => {

  console.log('no session, redirect to login');
  res.data = {redirectUrl: 'http://localhost:3001'}
  return res.json(res.data)
}

router.route('/')
  .get(getIngredients ,(req, res, next)=> res.json(res.ingredients))
  .post(addIngredients, (req, res) => res.sendStatus(204))



module.exports = router;
