const mongoose = require('mongoose');

// URI from server/db.cjs
const MONGO_URI = "mongodb+srv://lovekumar2801_db_user:school123@website.x3nmpyp.mongodb.net/school?appName=WebSite";

const testDB = async () => {
    try {
        console.log("Connecting to MongoDB Atlas...");
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`Connected to host: ${conn.connection.host}`);

        // Define simple schema
        const TestSchema = new mongoose.Schema({ name: String, date: Date });
        const TestModel = mongoose.model('TestEntry', TestSchema);

        // Create entry
        console.log("Attempting to write data...");
        const entry = new TestModel({ name: "Connection Test", date: new Date() });
        await entry.save();
        console.log("✅ Data saved successfully!");

        // Read entry
        const found = await TestModel.findOne({ name: "Connection Test" });
        console.log("✅ Data read back:", found);

        process.exit(0);
    } catch (err) {
        console.error("❌ Database Error:", err.message);
        process.exit(1);
    }
};

testDB();
