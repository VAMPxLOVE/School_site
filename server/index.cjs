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

const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Configure Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '../public/uploads/notices');
        // Ensure directory exists
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        // Unique filename: date-originalName
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.post('/api/notices', upload.single('pdf'), async (req, res) => {
    console.log("Received Notice Upload Request");
    console.log("Content-Type:", req.headers['content-type']); // DEBUG: Check what client is sending

    // Debug: Log complete headers and body
    // console.log("Headers:", req.headers);
    // console.log("Body:", req.body);
    // console.log("File:", req.file);

    try {
        if (!req.body) {
            throw new Error("Request body is empty or undefined. Multer failed to parse.");
        }

        // Multer puts text fields in key-value pairs in req.body.
        // Even if no file is uploaded, req.body should be populated.
        const { title, content, date } = req.body;

        if (!title || !content || !date) {
            throw new Error("Missing required fields: title, content, or date");
        }

        let filePath = null;
        if (req.file) {
            // Save relative path for frontend access
            // e.g., /uploads/notices/filename.pdf
            filePath = `/uploads/notices/${req.file.filename}`;
        }

        const notice = new Notice({ title, content, date, filePath });
        await notice.save();
        console.log("Notice saved:", notice);
        res.json({ "message": "success", "data": notice, "id": notice._id });
    } catch (err) {
        console.error("Error saving notice:", err);
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


