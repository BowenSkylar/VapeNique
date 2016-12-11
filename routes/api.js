onst router = require('express').Router();
const { createUser, authenticate } = require('../models/users.js')
const { getRecipes, addRecipes, addIngredients, softDeleteRecipe, hardDeleteRecipe } = require('../models/api.js');

const sendResponse = (req, res) => res.json(res.data);
const sessionErrorHandler = (err, req, res, next) => {

  console.log('no session, redirect to login');
  res.data = {redirectUrl: 'http://localhost:3001'}
  return res.json(res.data)
}

router.route('/recipe')
  .put(softDeleteRecipe, (req, res) => res.sendStatus(204))
  .post(addRecipes, (req, res) => res.sendStatus(204))
  .get(getRecipes, sendResponse)
  .delete(hardDeleteRecipe, (req, res) => res.sendStatus(204))

router.route('/recipe')
  .post(addIngredients, (req, res) => res.sendStatus(204))



module.exports = router;
