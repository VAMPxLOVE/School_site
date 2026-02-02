const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DBSOURCE = path.join(__dirname, "school.db");

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');

        // Create Notices Table
        db.run(`CREATE TABLE notices (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text, 
            content text, 
            date text
            )`,
            (err) => {
                if (err) {
                    // Table already created
                } else {
                    // Insert some dummy data
                    const insert = 'INSERT INTO notices (title, content, date) VALUES (?,?,?)';
                    db.run(insert, ["Admissions Open", "Admissions for 2026-27 are now open. Apply online.", "2026-01-30"]);
                    db.run(insert, ["Football Championship", "Our team won the regional cup!", "2026-01-25"]);
                    db.run(insert, ["Winter Break", "School closed until Jan 15th.", "2026-01-10"]);
                }
            });

        // Create Results Table
        db.run(`CREATE TABLE results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            student_name text,
            roll_no text UNIQUE,
            class text,
            marks text 
            )`,
            (err) => {
                if (!err) {
                    const insert = 'INSERT INTO results (student_name, roll_no, class, marks) VALUES (?,?,?,?)';
                    db.run(insert, ["John Doe", "101", "10", JSON.stringify({ Math: 95, Science: 88, English: 90 })]);
                    db.run(insert, ["Jane Smith", "102", "10", JSON.stringify({ Math: 78, Science: 92, English: 85 })]);
                }
            });

        // Create Messages Table
        db.run(`CREATE TABLE messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            email text,
            subject text,
            message text,
            date text
            )`);
    }
});

module.exports = db;
