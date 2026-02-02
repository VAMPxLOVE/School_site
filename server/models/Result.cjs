const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    student_name: String,
    roll_no: { type: String, unique: true },
    class: String,
    marks: Object // Store as Object directly, no need for JSON stringify in Mongoose
});

module.exports = mongoose.model('Result', resultSchema);
