const mongoose = require('mongoose')

before(done => {
    mongoose.connect('mongodb://localhost/movie2free_test')
    mongoose.connection
        .once('open',() => done())
        .on('error', err => {
            console.warn('Warning',error)
        })
})

beforeEach(done => {
    const { movies } = mongoose.connection.collections
    movies.drop()
        .then(() => done())
        .catch(() => done())
})