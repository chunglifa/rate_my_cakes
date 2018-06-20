console.log('*********AT ROUTES.JS FILE*********');
const cakeController = require('../controllers/cakeController.js')
const commentController = require('../controllers/commentController.js')

module.exports = function(app) {
    app.get('/cakes', cakeController.getCakes);
    app.post('/add/:id', commentController.postComment);
    app.post('/cakes', cakeController.postCake);
}