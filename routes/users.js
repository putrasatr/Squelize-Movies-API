const express = require('express');
const router = express.Router();
const db = require("../models/index")
const Users = db.users

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const data = await Users.findAll({})
    return res.status(201).send({
      data
    })

  } catch (error) {
    console.log(error)
    return res.send(500).send({
      message: err.message || "Something Error"
    })
  }
});

router.post('/register', function (req, res, next) {
  console
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Users
  const options = {
    email: req.body.email,
    password: req.body.password,
    username: req.body.username
  };

  // Save Users in the database
  Users.create(options)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Users."
      });
    });
});

module.exports = router;
