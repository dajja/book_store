const { renderCart, addCart, updateAmount, deleteCart } = require("../models/cart.models.js");
module.exports.getCart = async (req, res) => {
    try {
        let [result] = await renderCart();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports.addCart = async (req, res) => {
    const { cartID, products, totalPrice, amount } = req.body;
    try {
        await addCart(cartID, products, totalPrice, amount);
        res.status(200).json({
            message: "success"
        });
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports.addAmountCart = async (req, res) => {
    const { amount, id } = req.body;
    try {
        await updateAmount(amount, id);
        res.status(200).json({
            message: "success"
        });
    } catch (err) {
        res.status(500).json(err.message);
    }
}
module.exports.deleteCart = async (req, res) => {
    const { cartID } = req.body;
    console.log(cartID);
    try {
        await deleteCart(cartID);
        res.status(200).json({
            message: "delete success"
        })
    } catch (err) {
        res.status(500).json(err.message);
    }
}




