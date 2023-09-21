const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
    profilePicture: String,
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = mongoose.model('Story',storySchema);