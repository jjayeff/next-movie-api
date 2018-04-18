const assert = require('assert')
const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../../app')
const data = require('../data_test.json')

const Movie = mongoose.model('movie')

describe('Movie controller', () => {
    it('Post to /api/movie/create create a new movie', done => {
        Movie.count().then(count => {
            request(app)
            .post('/api/movies/create')
            .send(data)
            .end(() => {
                Movie.count().then(newCount => {
                    assert(count + 1 === newCount)
                    done()
                })
            })
        })
    })

    it('POST to /api/movies/edit/id edit an existing movie', done => {
        const movie = new Movie(data)
        movie.save().then(() => {
            request(app)
                .put(`/api/movies/edit/${movie._id}`)
                .send({ imdb: "10" })
                .end(() => {
                    Movie.findOne({_id: movie._id})
                        .then(movie => {
                            assert(movie.imdb === "10")
                            done()
                        })
                })
        })
    })

    it('GET to /api/movies/sreach/type/type can sreach a type movie', done => {
        request(app)
            .get('/api/movies/sreach/type/type')
            .end((err, response) => {
                done()
            })
    })

    it('GET to /api/movies/sreach/group/group can sreach a group movie', done => {
        request(app)
            .get('/api/movies/sreach/group/group')
            .end((err, response) => {
                done()
            })
    })

    it('DELETE to api/movies/delete/id can delete a movie', done => {
        const movie = new Movie(data)
        movie.save().then(() => {
            request(app)
                .get(`/api/movies/delete/${movie._id}`)
                .end(() => {
                    Movie.findOne({_id: movie._id})
                        .then(movie => {
                            assert(movie === null)
                            done()
                        })
                })
        })
    })

})