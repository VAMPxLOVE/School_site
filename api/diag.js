const connectDB = require('../server/db');
const mongoose = require('mongoose');

module.exports = async (req, res) => {
    try {
        const conn = await connectDB();
        const admin = new mongoose.mongo.Admin(conn.db);
        const { databases } = await admin.listDatabases();

        const currentDb = conn.db.databaseName;
        const collections = await conn.db.listCollections().toArray();

        res.status(200).json({
            currentDb,
            availableDatabases: databases.map(db => db.name),
            currentCollections: collections.map(c => c.name),
            envMongoUriExists: !!process.env.MONGO_URI,
            envMongodbUriExists: !!process.env.MONGODB_URI
        });
    } catch (err) {
        res.status(500).json({ error: err.message, stack: err.stack });
    }
};
