const mongoose = require('mongoose')

const workersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('workers', workersSchema)