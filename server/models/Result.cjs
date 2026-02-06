const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    student_name: String,
    roll_no: { type: String, unique: true },
    admission_no: String,
    dob: String, // Storing as String (YYYY-MM-DD) for simplicity
    class: String,
    marks: Object // Store as Object directly, no need for JSON stringify in Mongoose
});

module.exports = mongoose.model('Result', resultSchema);
