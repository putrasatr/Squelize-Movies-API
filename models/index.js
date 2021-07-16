const { development, production, test } = require("../config/db.config.js");
const { database, dialect, host, password, pool, username } = development
const Sequelize = require("sequelize");
const sequelize = new Sequelize(database, username, password, {
  host, dialect, pool,
  logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.movies = require("./movies.model.js")(sequelize, Sequelize);
db.foods = require("./foods.model.js")(sequelize, Sequelize);
db.posts = require("./posts.model.js")(sequelize, Sequelize);
db.comments = require("./comments.model.js")(sequelize, Sequelize);
db.likes = require("./likes.model.js")(sequelize, Sequelize);

module.exports = db;