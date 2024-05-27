const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
  commenter: String,
  text: String,
  blogPost: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' },
});

module.exports = mongoose.model('Comment', commentSchema);