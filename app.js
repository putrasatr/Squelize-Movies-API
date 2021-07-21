const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const moviesRouter = require('./routes/movies');
const foodsRouter = require('./routes/foods');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const likesRouter = require('./routes/likes');
const savesRouter = require('./routes/saves');

const app = express();
require('dotenv').config()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const db = require("./models/index");
db.sequelize.sync();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/foods', foodsRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.use('/likes', likesRouter);
app.use('/saves', savesRouter);

module.exports = app;
