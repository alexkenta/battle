const userController = require('../controllers/users')

module.exports = function(app){
    app.post('/saveUser', userController.create),
    app.get('/getAllUsers', userController.show)
}