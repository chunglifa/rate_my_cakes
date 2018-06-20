console.log('AT cakeController.js');
//importing Cake object from db
const mongoose = require('mongoose');
var Cake = mongoose.model('Cake');

module.exports = {
    getCakes: function (req, res) {
        console.log('getCakes function at cakeController.js')
        var cakes;
        console.log('console log cakes', cakes);
        Cake.find({}, function (err, cakes) {
            if (err) {
                console.log('Error bringing tasks in')
            }
            else {
                console.log('Got the cakes at server', cakes);
                res.json({message:"Sent cakes data object", data: cakes});
            }
            console.log(cakes);
        })
    },

    postCake: function (req, res) {
        console.log('DATA FROM CAKE.SERVICE.TS')
        var cake = new Cake({
            baker: req.body.baker,
            imgurl: req.body.imgurl,
        });
        cake.save(function (err) {
            if (err) {
                console.log('ERROR');
            }
            else {
                console.log('added new Cake');
                res.json({message: "successfully added cake"});
            }
        })
    }

};