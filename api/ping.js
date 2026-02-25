module.exports = (req, res) => {
    res.status(200).json({ status: "ok", message: "Standard .js handler works!" });
};
