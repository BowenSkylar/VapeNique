const db = require('../db/db');


//working model?
function getRecipes(req, res, next){
  const user_id = req.user.user_id;
  console.log(req.user);
  db.any(`SELECT * from recipes WHERE user_id = $1;`, [user_id])
  // db.any(`SELECT * from recipes;`)
    .then((recipes)=> {
      res.rows = recipes;
      next();
    })
    .catch((err) => {
      console.log('*** getting all recipies error ***')
    })
};

function addRecipe(req, res, next){
  const user_id = req.user.user_id;
  db.none(`INSERT INTO recipes(user_id, recipe_name, nicotine, size) VALUES ($1, $/recipeName/, $/nicotine/, $/size/);`,[user_id], req.body)
    .then(() => next())
    .catch((err) => {
      console.log('*** adding recipie error ***')
    })
};
function softDeleteRecipe(req, res, next) {
  const user_id = req.user.user_id;
  db.none(`UPDATE recipes SET soft_deleted = '2'
            WHERE user_id = $1
            AND recipe_name = $2;`,[user_id, req.body.recipeName] )
    .then(() => next())
    .catch((err) => {
      console.log('*** soft delete recipe error ***')
    })
};

function hardDeleteRecipe(req, res, next) {
  db.none(`DELETE FROM recipes
            WHERE user_id = $1
            AND recipe_name = $2;`,[user_id, req.body.recipeName])
    .then(() => next())
    .catch((err) => {
      console.log('*** hard delete recipie error ***')
    })
};


module.exports={
  getRecipes,
  addRecipe,
  softDeleteRecipe,
  hardDeleteRecipe
}
