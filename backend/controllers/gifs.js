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

// // id param
// router.get('/:id', (req, res) => {
//     let id = req.params.id

// })

// create
router.post('/', (req, res) => {
    Gif.create(req.body.gif)
        .then(gif => {
            // res.send ??
            res.send
        })
})

// id param
router.put('/:id', (req, res) => {
    Gif.findOneAndUpdate({id: req.params.id})    
})

// id param
router.delete('/:id', (req, res) => {

})

// export router
