const mongoose = require('./connection')

const GifSchema = new mongoose.Schema({
    name: String,
    url: String,
})

// const Gif = // moved defined Gif to seeds.js
// instead, JUST attach the Gif and GifSchema to the mongoose model.
mongoose.model('Gif', GifSchema)

module.exports = mongoose // export the mongoose model ( with attached Gif and GifSchema ), not the defined Gif
