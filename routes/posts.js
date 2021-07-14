const express = require('express')
const router = express.Router()

const db = require('../models/index')

const Posts = db.posts
const Users = db.users
Posts.belongsTo(Users, { foreignKey: 'userId', targetKey: 'id' });

router.get('/', async (req, res, next) => {
    try {
        const page = req.query.page || 1
        const limit = 5
        const offset = Math.ceil(limit * (page - 1))
        const { count } = await Posts.findAndCountAll({
            include: [{
                model: Users,
                attributes: ["username", "email"]
            }],
        })
        const data = await Posts.findAll({
            offset,
            limit,
            include: [{
                model: Users,
                attributes: ["username", "email"]
            }],
        })
        const pages = Math.ceil(count / limit)
        return res.status(200).json({
            code: 200,
            data,
            message: "Success",
            statusText: true,
            pagination: {
                page,
                limit,
                offset,
                totalAll: count,
                pages
            }

        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            code: 500,
            data: false,
            statusText: false,
            message: error.message || "Something Error",
            page
        })
    }
})

router.post('/', async (req, res, next) => {

    try {
        await Posts.create(req.body)
        return res.status(201).send({
            message: "Success",
            statusText: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            data: false,
            statusText: false,
            message: error.message || "Something Error"
        })
    }
})

module.exports = router