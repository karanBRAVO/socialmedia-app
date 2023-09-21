const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: String,
    email: String,
    password: String,
    role:{
        type: String,
        enum: ['Admin' , 'visitor']
    },

    details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Details'
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    story: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story'
    }],

});

module.exports = mongoose.model('User',userSchema);