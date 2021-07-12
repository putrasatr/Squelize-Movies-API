const express = require('express');
const router = express.Router();
const db = require("../models/index")
const Users = db.users

/* GET users listing. */
router.get('/', function (req, res, next) {
  Users.findAll({})
    .then(data => {
      res.status(201).send({
        data
      }).catch(err => {
        res.send(500).send({
          message: err.message || "Something Error"
        })
      })
    })
});

module.exports = router;
