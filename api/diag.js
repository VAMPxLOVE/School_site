const connectDB = require('../server/db');

module.exports = async (req, res) => {
    try {
        const conn = await connectDB();
        const currentDb = conn.db.databaseName;
        const collections = await conn.db.listCollections().toArray();

        res.status(200).json({
            status: "connected",
            currentDb,
            currentCollections: collections.map(c => c.name),
            ping: "ok"
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
