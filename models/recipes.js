const db = require('../models/db');


//working model?
function getRecipes(req, res, next){
  const user_id = req.user.user_id;
  console.log(req.user);
  db.any(`SELECT * from recipes WHERE user_id = $1;`,[user_id])
  // db.any(`SELECT * from recipes;`)
    // .then(r=>r.json())
    .then((recipes)=> {
      res.rows = recipes;
      console.log(recipes)
      next();
    })
    .catch((err) => {
      console.log('*** getting all recipies error ***')
    })
};

// insert into recipes (user_id, recipe_name, nicotine, soft_deleted, size) values (2, 'liquid gold', 3, 1, 10);
function addRecipe(req, res, next){
  const user_id = req.user.user_id;
console.log(typeof req.body.recipeName)
console.log(typeof req.body.nicotine)
console.log(typeof req.body.size)
console.log(typeof user_id)
  console.log(req.user);
  db.none(`
          INSERT INTO recipes (user_id, recipe_name, nicotine, soft_deleted, size)
          VALUES ($1, $2, $3, $4, $5);`
           ,[user_id, req.body.recipeName, parseInt(req.body.nicotine), '1', parseInt(req.body.size)])
          // ,[9, 'tester', 30, '1', 50])
  //INSERT INTO ingredients (flavor) VALUES ($5); COMMIT;
    .then(() => next())
    .catch((err) => {
      console.log('*** adding recipie error ***')
    })
};


//loop fetch call
//write model to take in ingredients  to enter ingredients
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
  const user_id = req.user.user_id;
  console.log(user_id);
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
