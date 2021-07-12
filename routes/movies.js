const express = require('express')
const router = express.Router()

const { getCondition } = require('../helpers/index')
const db = require('../models/index')
const Movies = db.movies

router.get('/', async (req, res, next) => {
    try {
        const condition = getCondition(req.query)
        const data = await Movies.findAll({ where: condition })
        return res.send({
            data,
            message: "Success",
            statusText: true
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: error.message || "Something Error"
        })
    }
})

router.post('/', async (req, res, next) => {

    try {
        await Movies.create(req.body)
        res.status(201).send({
            message: "Success",
            statusText: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            data: false,
            statusText: false,
            message: error.message || "Something Error"
        })
    }
})

module.exports = router