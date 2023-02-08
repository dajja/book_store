const express = require("express");
const router = express.Router();
const { addCart, getCart, addAmountCart, deleteCart } = require("../controllers/cart.controllers.js");

router.get("/", getCart);
router.post("/", addCart);
router.put("/", addAmountCart);
router.delete("/", deleteCart);
module.exports = router;