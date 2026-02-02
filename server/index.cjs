const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db.cjs');

// Models
const Notice = require('./models/Notice.cjs');
const Result = require('./models/Result.cjs');
const Message = require('./models/Message.cjs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB().then(async () => {
    // Optional: Seed Notices if empty
    const count = await Notice.countDocuments();
    if (count === 0) {
        await Notice.insertMany([
            { title: "Admissions Open", content: "Admissions for 2026-27 are now open. Apply online.", date: "2026-01-30" },
            { title: "Football Championship", content: "Our team won the regional cup!", date: "2026-01-25" },
            { title: "Winter Break", content: "School closed until Jan 15th.", date: "2026-01-10" }
        ]);
        console.log("Seeded initial notices.");
    }

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

// API Routes

// GET all notices
app.get('/api/notices', async (req, res) => {
    try {
        const notices = await Notice.find().sort({ date: -1 });
        res.json({ "message": "success", "data": notices });
    } catch (err) {
        res.status(500).json({ "error": err.message });
    }
});

// POST a new notice
app.post('/api/notices', async (req, res) => {
    try {
        const { title, content, date } = req.body;
        const notice = new Notice({ title, content, date });
        await notice.save();
        res.json({ "message": "success", "data": notice, "id": notice._id });
    } catch (err) {
        res.status(400).json({ "error": err.message });
    }
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const date = new Date().toISOString().split('T')[0];
        const msg = new Message({ name, email, subject, message, date });
        await msg.save();
        res.json({ "message": "success", "id": msg._id });
    } catch (err) {
        res.status(400).json({ "error": err.message });
    }
});

// Fetch Messages (Admin)
app.get('/api/messages', async (req, res) => {
    try {
        const messages = await Message.find().sort({ _id: -1 });
        res.json({ "message": "success", "data": messages });
    } catch (err) {
        res.status(500).json({ "error": err.message });
    }
});

// Fetch Result by Roll No
app.get('/api/results/:rollNo', async (req, res) => {
    try {
        const result = await Result.findOne({ roll_no: req.params.rollNo });
        res.json({ "message": "success", "data": result });
    } catch (err) {
        res.status(500).json({ "error": err.message });
    }
});

// Add Result (Admin)
// Add Result (Admin)
app.post('/api/results', async (req, res) => {
    console.log("Received Result Upload Request:", req.body); // DEBUG LOG
    try {
        const { student_name, roll_no, class: studentClass, marks } = req.body;

        const result = new Result({
            student_name,
            roll_no,
            class: studentClass,
            marks
        });

        if (!marks && (req.body.math || req.body.science || req.body.english)) {
            console.log("Constructing marks from individual fields..."); // DEBUG LOG
            result.marks = {
                Math: req.body.math,
                Science: req.body.science,
                English: req.body.english
            };
        } else {
            result.marks = marks;
        }

        console.log("Saving result object:", result); // DEBUG LOG
        await result.save();
        console.log("Result saved successfully via Mongoose!"); // DEBUG LOG
        res.json({ "message": "success", "id": result._id });
    } catch (err) {
        console.error("Error saving result:", err); // DEBUG LOG
        res.status(400).json({ "error": err.message });
    }
});


// Simple Admin Login (Hardcoded for demo, but server-side)
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // In a real app, check against a Users table with hashed passwords
    if (username === 'admin' && password === 'password123') {
        res.json({ "message": "success", "token": "fake-jwt-token-123" });
    } else {
        res.status(401).json({ "message": "Invalid credentials" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
