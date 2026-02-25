module.exports = (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "Minimal API entry is alive",
        env: process.version
    });
};
