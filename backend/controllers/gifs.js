const express = require('express')
const Gif = require('./db/schema')
const router = express.Router()

router.get('/', (req, res) => {
    Gif.find({})
        .then((gifs) => {
            res.json('gifs-index', {
                gifs: gifs
            })
    })
    .catch((err) => {
        console.log(err)
    })
})

