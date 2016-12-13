const router = require('express').Router();
const { createUser, authenticate } = require('../models/users.js')
const { getRecipes, addRecipe, softDeleteRecipe, hardDeleteRecipe } = require('../models/recipes.js');

const sendResponse = (req, res) => res.json(res.data);
const sessionErrorHandler = (err, req, res, next) => {

  console.log('no session, redirect to login');
  res.data = {redirectUrl: 'http://localhost:3001'}
  return res.json(res.data)
}

router.route('/')
  .put(softDeleteRecipe, (req, res) => res.sendStatus(204))
  .post(addRecipe, (req, res) => res.sendStatus(204))
  .get(getRecipes, (req, res) => res.json(res.rows))
  // .delete(hardDeleteRecipe, (req, res) => res.sendStatus(204))

module.exports = router;
