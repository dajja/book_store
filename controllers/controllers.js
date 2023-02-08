const { renderAll } = require("../models/models.js");
module.exports.getAll = async (req, res) => {
    try {
        let [result] = await renderAll();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

