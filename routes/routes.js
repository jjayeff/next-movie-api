const MovieController = require('../controllers/movie_controller')

module.exports = (app) => {
    app.get('/api/movies', MovieController.greeting)
    app.post('/api/movies/create', MovieController.create)
    app.put('/api/movies/edit/:id', MovieController.edit)
    app.get('/api/movies/delete/:id', MovieController.delete)
    app.get('/api/movies/sreach/type/:type', MovieController.searchType),
    app.get('/api/movies/sreach/group/:group', MovieController.searchGroup)
}