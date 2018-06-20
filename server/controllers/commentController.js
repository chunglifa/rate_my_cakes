console.log('AT commentController.js');
//importing Cake object from db
const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');
const Cake = mongoose.model('Cake');

module.exports = {
    postComment: function (req, res) {
        console.log('REQ.PARAMS', req.params)
        console.log('REQ.BODY',req.body)
        Cake.findOneAndUpdate({_id: req.params.id}, {$push: {comments: req.body}}, function(err, cake) {
            if (err) {
                console.log('error posting comment');
            }
            else {
                console.log('success!');
            };
        })
            

    }

}
