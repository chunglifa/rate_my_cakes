console.log('SERVER > MODELS > comment.js');
const mongoose = require("mongoose");


var CommentSchema = new mongoose.Schema({
  rating: {type: Number},
  content: {type: String, default: ""},

 },
  { timestamps: true }
);

mongoose.model('Comment', CommentSchema); //we are setting this schema in our models as Task

module.exports = CommentSchema;