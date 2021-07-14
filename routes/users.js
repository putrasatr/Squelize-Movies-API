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

router.post('/login', async function (req, res, next) {
  console.log(req.body)
  const { email, password } = req.body
  try {
    const userFound = await Users.findAll({
      where: {
        email
      }
    })
    if (userFound.length == 0) throw ({ status: 200, message: "User Not Found" })
    const passwordMatch = await Users.findAll({
      where: {
        email,
        password
      }
    })
    if (passwordMatch.length == 0) throw ({ status: 200, message: "Email or PassWord is not Correct!" })
    return res.status(200).send({
      data: userFound,
      message: "Found"
    });
  } catch (err) {
    console.log(err)
    const status = err.status || 500
    return res.status(status).send({
      data: [],
      message:
        err.message || "Some error occurred while creating the Users."
    });
  }
});

module.exports = router;
