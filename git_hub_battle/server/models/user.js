const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    login: {type: String},
    photoUrl: {type: String},
    score: {type: Number}
});

module.exports = mongoose.model('User', userSchema)