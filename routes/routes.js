const express = require("express");
const router = express.Router();
const { getAll } = require("../controllers/controllers.js");
router.get("/", getAll);
router.get("/admin", getAll);
router.get("/products", getAll);
module.exports = router;