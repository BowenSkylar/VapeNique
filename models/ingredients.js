const db = require('../db/db');

function getIngredients(req, res, next) {
  db.any('SELECT * from ingredients')
    .then((ingredients) => {
      res.ingredients = ingredients;
      next();
    })
    .catch(error => next(error));
}



function addIngredients(req, res, next){
  db.none(`INSERT INTO ingredients(column, column, column, column) VALUES ($/value*here/,$/value*here/,$/value*here/) WHERE belongs_to = $1;`, req.body)
    .then(() => next())
    .catch((err) => {
      console.log('*** adding ingredients error ***')
    })
};
module.exports={ addIngredients, getIngredients }
