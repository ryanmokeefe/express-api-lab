console.log('hello node')

const express = require('express')
const mongoose = require('mongoose')
const parser = require('body-parser')
const app = express()






////////////
// 
app.get('/', (req, res) => {
    res.send("hello world")
})

// establish port/start server: 
app.listen(3000, () => {
    console.log("app listening on port 3000")
})
