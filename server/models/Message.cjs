const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    date: String
});

module.exports = mongoose.model('Message', messageSchema);
