console.log('SERVER > MODELS > cake.js');
const mongoose = require("mongoose");
var CommentSchema = require('./comment')


var CakeSchema = new mongoose.Schema({
  baker: {type: String},
  imgurl: {type: String, default: ""},
  comments: [CommentSchema]
 },
  { timestamps: true }
);

mongoose.model('Cake', CakeSchema); //we are setting this schema in our models as Task