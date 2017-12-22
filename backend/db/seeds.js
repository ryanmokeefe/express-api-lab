const mongoose = require('./schema')
const seedData = require('./seeds.json')

// moved defined Gif from schema
const Gif = mongoose.model('Gif')

Gif.remove({})
    .then(() => {
        return Gif.collection.insert(seedData)
    })
    .then(() => {
        process.exit()
    })

