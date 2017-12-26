console.log('hello node')

const express = require('express')
const mongoose = require('mongoose')
const parser = require('body-parser')
const cors = require('cors')
const app = express()
const gifs = require('./controllers/gifs')
const methodOverride = require('method-override')

// set port
app.set('port', process.env.PORT || 3000)
// use method override
app.use(methodOverride('_method'))
// use parser
app.use(parser.json)
// use parser encoded
app.use(parser.urlencoded({extended: true}))

////////////
// 
app.get('/', (req, res) => {
    res.send("hello world")
})

// use path: to controllers file
        // * nodemon err: gifs is not defined?
app.use('/gifs', gifs)

// establish port/start server: 
app.listen(3000, () => {
    console.log("app listening on port 3000")
})
