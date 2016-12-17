'use strict'

if (process.env.NODE_ENV == 'development') require('dotenv').config({
silent: true });

const bodyParser  = require('body-parser');
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const jwt         = require('jsonwebtoken');
const expressJWT  = require('express-jwt');
const bcrypt      = require('bcryptjs');
const app         = express();
const PORT = process.argv[ 2 ] || process.env.PORT || 3000;
// socket.io SANG MIN NA
const http       = require('http').Server(app);
const io         = require('socket.io')(http);


//socketIO help from Sang Min Na -> @smna15 = github
io.on('connection', socket => {
  console.log('*** A user just connected!!***');
  // receive msg from client through socket 'server-chat'
  socket.on('server-chat', msg => {
    //preview of message
    console.log('chat: ' + msg);





    // broadcast msg received to all who are listening to socket 'chatroom'
    socket.broadcast.emit('chatroom', {msg : msg});
  });

  socket.on('disconnect', () => console.log('***user disconnected :( ***'));
});

http.listen(PORT, () => console.log('listening on', PORT));

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));
app.use(expressJWT({secret: process.env.SECRET}).unless({
  path: ['/favicon.ico', '/user/login', '/user/signup', '/ingredients']
}));

const userRouter = require('./routes/users.js');
const recipeRouter = require('./routes/recipes.js');
// const ingredientRouter = require('./routes/ingredients.js');

app.use('/user', userRouter);
app.use('/db/recipes', recipeRouter);
// app.use('/ingredients', ingredientRouter);

// app.listen(PORT, () => console.log('server here!! listening on', PORT));
