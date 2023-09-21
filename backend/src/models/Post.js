const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    imageUrl: String,
    desription: String,
    comments: [{
        type: String
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Post',postSchema);