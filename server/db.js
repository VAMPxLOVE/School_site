const mongoose = require('mongoose');

// Cached connection for Serverless (Vercel)
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
    // Atlas Connection String - Use Env Var in production
    // Support both MONGO_URI (Custom) and MONGODB_URI (Vercel Integration)
    const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI || "mongodb+srv://lovekumar2801_db_user:school123@website.x3nmpyp.mongodb.net/school?appName=WebSite";

    if (cached.conn) {
        console.log("Using cached MongoDB connection");
        return cached.conn;
    }

    if (!cached.promise) {
        console.log("Connecting to MongoDB...");
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 5000, // 5 seconds timeout
            connectTimeoutMS: 10000, // 10 seconds timeout
        };
        cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
            console.log("MongoDB Connected Correctly");
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
};

module.exports = connectDB;
