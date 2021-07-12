const express = require('express');
const router = express.Router();
const db = require('../models/index')
const Users = db.users

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index.html')
})


module.exports = router
