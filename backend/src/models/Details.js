const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
    profilePicture: String,
    contact: Number,
    age: Number,
    dob: Date,
    about: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Details',detailsSchema);