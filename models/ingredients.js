// const db = require('../models/db');

// function getIngredients(req, res, next) {
//   db.any(`SELECT * from ingredients`)
//     .then((ingredients) => {
//       res.ingredients = ingredients;
//       next();
//     })
//     .catch(error => next(error));
// }

// function addIngredients(req, res, next){
//   db.none(`INSERT INTO ingredients (flavor) VALUES ($1);`,[req.body.])
//     .then(() => next())
//     .catch((err) => {
//       console.log('*** adding ingredients error ***')
//     })
// };
// module.exports={ addIngredients, getIngredients }
