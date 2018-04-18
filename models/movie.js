const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imdb: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    quality: {
        type: String,
        required: true
    },
    sound: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    trailer: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    videosThai: {
        type: Array
    },
    videosEng: {
        type: Array
    },
    type: {
        type: Array,
        required: true
    },
    group: {
        type: Array,
        required: true
    }
})

const Movie = mongoose.model('movie', MovieSchema)

module.exports = Movie