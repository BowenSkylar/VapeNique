const db = require('../models/db');



// SELECT *FROM recipes
//   INNER JOIN vape_users
//     ON (recipes.belongs_to = vape_users.user_id);

//link recipe to current password logged in? INNER JOIN?
function getRecipes(req, res, next){
  db.any(`SELECT * from recipes WHERE belongs_to =$1;`)
    .then((recipes)=> {
      res.rows = recipes;
      next();
    })
    .catch(error => next(error));
};

function addRecipe(req, res, next){
  db.none(`INSERT INTO recipes() VALUES ($/value*/,$/value*here/,$/value*here/);`, req.body)
    .then(() => next())
    .catch((err) => {
      console.log('*** adding recipie error ***')
    })
};

function addIngredients(req, res, next){
  db.none(`INSERT INTO ingredients(column, column, column, column) VALUES ($/value*here/,$/value*here/,$/value*here/) WHERE belongs_to = $1;`, req.body)
    .then(() => next())
    .catch((err) => {
      console.log('*** adding ingredients error ***')
    })
};

function softDeleteRecipe(req, res, next) {
  db.none(`UPDATE recipes SET soft_deleted = '2'
            WHERE id = $/id/;`, req.body)
    .then(() => next())
};

function hardDeleteRecipe(req, res, next) {
  db.none(`DELETE FROM recipes
          WHERE id = $/id/;`, req.body)
    .then(() => next())
};


module.exports={
  getRecipes,
  addRecipe,
  softDeleteRecipe,
  hardDeleteRecipe
}
