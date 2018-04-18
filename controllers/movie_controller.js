const Movie = require('../models/movie')

module.exports = {
    async greeting(req, res) {
        Movie.find().sort({_id:-1})
            .then(movie => res.send(movie))
    },

    create(req, res, next) {
        const movieProps = req.body
        Movie.create(movieProps)
            .then(movie => {
                Movie.find().sort({_id:-1})
                    .then(movie => res.send(movie))
            })
            .catch(next)
    },

    edit(req, res, next) {
        const movieId = req.params.id
        const movieProps = req.body
        Movie.findByIdAndUpdate({ _id: movieId }, movieProps)
            .then(() => movie.findById({ _id: movieId}))
            .then(movie => res.send(movie))
            .catch(next) 
    },

    delete(req, res, next) {
        const movieId = req.params.id
        Movie.findByIdAndRemove({ _id: movieId })         
            .then(movie => {
                Movie.find().sort({_id:-1})
                .then(movie => res.send(movie))
            })
            .catch(next)      
    },

    searchType(req, res, next) {
        const movieType = req.params.type
        Movie.find({ type: { $all: [ movieType ] } }).sort({_id:-1})
            .then(movie => {
                res.send(movie)
            })
            .catch(next)  
    },

    searchGroup(req, res, next) {
        const movieGroup = req.params.group
        if(req.params.group === 'IMDB') {
            Movie.find().sort({ imdb:-1 })
            .then(movie => {
                res.send(movie)
            })
            .catch(next) 
        } else if(req.params.group === 'หนังออกใหม่') {
            Movie.find().sort({year:-1}).sort({_id:-1})
            .then(movie => {
                res.send(movie)
            })
            .catch(next) 
        } else {
            Movie.find({ group: { $all: [ movieGroup ] } }).sort({_id:-1})
            .then(movie => {
                res.send(movie)
            })
            .catch(next) 
        }
    }
}