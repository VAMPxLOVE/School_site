const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Models
const Notice = require('./models/Notice');
const Result = require('./models/Result');
const Message = require('./models/Message');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Multer for Vercel (use /tmp for serverless runtime)
const isVercel = process.env.VERCEL === '1';
const baseUploadDir = isVercel ? '/tmp' : path.join(__dirname, '../public');
const uploadDir = path.join(baseUploadDir, 'uploads/notices');

// Ensure Upload Directory Exists (safely)
try {
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
        console.log(`Created upload directory: ${uploadDir}`);
    }
} catch (err) {
    console.warn(`Could not create upload directory ${uploadDir}: ${err.message}`);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Connect to MongoDB (Non-blocking for Vercel)
connectDB();

// API Routes

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: "ok", message: "Server is running 🚀" });
});

// GET all notices
app.get('/api/notices', async (req, res) => {
    try {
        await connectDB();
        const notices = await Notice.find().sort({ date: -1 });
        res.json({ "message": "success", "data": notices });
    } catch (err) {
        res.status(500).json({ "error": err.message });
    }
});

// POST new notice
app.post('/api/notices', upload.single('pdf'), async (req, res) => {
    try {
        await connectDB();
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ "error": "Request body is empty." });
        }
        const { title, content, date } = req.body;
        let filePath = null;
        if (req.file) filePath = `/uploads/notices/${req.file.filename}`;

        const notice = new Notice({ title, content, date, filePath });
        await notice.save();
        res.json({ "message": "success", "data": notice });
    } catch (err) {
        res.status(500).json({ "error": err.message });
    }
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    try {
        await connectDB();
        const { name, email, subject, message } = req.body;
        const date = new Date().toISOString().split('T')[0];
        const msg = new Message({ name, email, subject, message, date });
        await msg.save();
        res.json({ "message": "success", "id": msg._id });
    } catch (err) {
        res.status(400).json({ "error": err.message });
    }
});

// Fetch Messages
app.get('/api/messages', async (req, res) => {
    try {
        await connectDB();
        const messages = await Message.find().sort({ _id: -1 });
        res.json({ "message": "success", "data": messages });
    } catch (err) {
        res.status(500).json({ "error": err.message });
    }
});

// Secure Fetch Result
app.get('/api/search_result', async (req, res) => {
    try {
        await connectDB();
        const { rollNo, admissionNo, class: studentClass, dob } = req.query;
        if (!rollNo || !admissionNo || !studentClass || !dob) {
            return res.status(400).json({ "error": "All fields required." });
        }
        const result = await Result.findOne({ roll_no: rollNo, admission_no: admissionNo, class: studentClass, dob: dob });
        res.json({ "message": result ? "success" : "not found", "data": result || null });
    } catch (err) {
        res.status(500).json({ "error": err.message });
    }
});

// Add Result
app.post('/api/results', async (req, res) => {
    try {
        await connectDB();
        const { student_name, roll_no, admission_no, dob, class: studentClass, marks } = req.body;
        const result = new Result({ student_name, roll_no, admission_no, dob, class: studentClass, marks });
        await result.save();
        res.json({ "message": "success", "id": result._id });
    } catch (err) {
        res.status(400).json({ "error": err.message });
    }
});

// Admin Login
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '@abcd1234') {
        res.json({ "message": "success", "token": "fake-jwt-token-123" });
    } else {
        res.status(401).json({ "message": "Invalid credentials" });
    }
});

// Start Server locally (Conditional)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export for Vercel
module.exports = app;


