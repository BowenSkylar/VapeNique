const db = require('../db/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const salt = 10;

function createUser(req, res, next) {
  console.log(req.body)
  db.none('INSERT INTO vape_users (username, password) VALUES ($1, $2);',
    [req.body.username, bcrypt.hashSync(req.body.password, salt)])
    .then( () => {
      console.log('user created!')
      next()
    })
  .catch(error => console.log(error))
}

function authenticate(req, res, next) {
  console.log(req.body.password)
  db.one('SELECT * FROM vape_users WHERE username = $/username/;', req.body)
    .then((data) => {
      console.log(data.password)
      const match = bcrypt.compareSync(req.body.password, data.password);
      if (match) {
        const myToken = jwt.sign({ username: req.body.username }, process.env.SECRET);
        res.status(200).json(myToken);
      } else {
        res.status(500).send('you not real');
      }
      next();
    })
  .catch(error => console.log(error))
}

module.exports = {
  createUser,
  authenticate,
}