console.log('hello node')

const express = require('express')
    const mongoose = require('mongoose')
const parser = require('body-parser')
const cors = require('cors')
const gifs = require('./controllers/gifs')
    const methodOverride = require('method-override')

const app = express()
// use parser encoded
app.use(parser.urlencoded({extended: true}))
// use parser
app.use(parser.json)

// set port
app.set('port', process.env.PORT || 3000)
// use method override
app.use(methodOverride('_method'))

// use cors:
app.use(cors())

// use path: to controllers file: * nodemon err: gifs is not defined? * fixed: export router
app.use('/gifs', gifs)

////////////
// 
app.get('/', (req, res) => {
    // * fix:
    res.render('../frontend/index.html')
    console.log("hello world")
})

// establish port/start server: 
app.listen(3000, () => {
    console.log("app listening on port 3000")
})
