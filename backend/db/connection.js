const mongoose = require("mongoose")


mongoose.connect('mongodb://localhost/express-api-lab', { useMongoClient: true })

mongoose.Promise = Promise

module.exports = mongoose
