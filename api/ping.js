module.exports = (req, res) => {
    res.status(200).json({ status: "ok", message: "Minimal CJS handler works!" });
};
