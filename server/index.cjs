const express = require('express');
const cors = require('cors');
const connectDB = require('./db.cjs');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Models
const Notice = require('./models/Notice.cjs');
const Result = require('./models/Result.cjs');
const Message = require('./models/Message.cjs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure Upload Directory Exists on Startup
const uploadDir = path.join(__dirname, '../public/uploads/notices');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log(`Created upload directory: ${uploadDir}`);
}

// Configure Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Use the pre-calculated path
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Connect to MongoDB
connectDB().then(async () => {
    // Optional: Seed Notices if empty
    try {
        const count = await Notice.countDocuments();
        if (count === 0) {
            await Notice.insertMany([
                { title: "Admissions Open", content: "Admissions for 2026-27 are now open. Apply online.", date: "2026-01-30" },
                { title: "Football Championship", content: "Our team won the regional cup!", date: "2026-01-25" },
                { title: "Winter Break", content: "School closed until Jan 15th.", date: "2026-01-10" }
            ]);
            console.log("Seeded initial notices.");
        }
    } catch (err) {
        console.error("Seeding error:", err);
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

// POST new notice
app.post('/api/notices', upload.single('pdf'), async (req, res) => {
    console.log("Received Notice Upload Request");

    try {
        // Check if Multer threw an error that wasn't caught yet (unlikely here but good practice)

        // Use explicit body check
        if (!req.body || Object.keys(req.body).length === 0) {
            console.error("Empty Body received");
            return res.status(400).json({ "error": "Request body is empty. Ensure you are sending FormData." });
        }

        const { title, content, date } = req.body;

        if (!title || !content || !date) {
            return res.status(400).json({ "error": "Missing required fields: title, content, or date." });
        }

        let filePath = null;
        if (req.file) {
            filePath = `/uploads/notices/${req.file.filename}`;
        }

        const notice = new Notice({ title, content, date, filePath });
        await notice.save();
        console.log("Notice saved:", notice);
        res.json({ "message": "success", "data": notice, "id": notice._id });
    } catch (err) {
        console.error("Error saving notice:", err);
        res.status(500).json({ "error": err.message });
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

// Secure Fetch Result (Matching multiple fields)
app.get('/api/search_result', async (req, res) => {
    try {
        const { rollNo, admissionNo, class: studentClass, dob } = req.query;

        // Ensure all fields are provided
        if (!rollNo || !admissionNo || !studentClass || !dob) {
            return res.status(400).json({ "error": "All fields (Roll No, Admission No, Class, DOB) are required." });
        }

        const result = await Result.findOne({
            roll_no: rollNo,
            admission_no: admissionNo,
            class: studentClass,
            dob: dob
        });

        if (result) {
            res.json({ "message": "success", "data": result });
        } else {
            res.json({ "message": "not found", "data": null });
        }
    } catch (err) {
        res.status(500).json({ "error": err.message });
    }
});

// Add Result (Admin)
// Add Result (Admin)
app.post('/api/results', async (req, res) => {
    console.log("Received Result Upload Request:", req.body); // DEBUG LOG
    try {
        const { student_name, roll_no, admission_no, dob, class: studentClass, marks } = req.body;

        const result = new Result({
            student_name,
            roll_no,
            admission_no,
            dob,
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
    if (username === 'admin' && password === '@abcd1234') {
        res.json({ "message": "success", "token": "fake-jwt-token-123" });
    } else {
        res.status(401).json({ "message": "Invalid credentials" });
    }
});


