const db = require("../utils/database.js");
module.exports.renderCart = () => {
    return db.execute('select * from tbl_cart');
}
module.exports.addCart = (id, product, totalPrice, amount) => {
    return db.execute("insert into tbl_cart (cartID, products, totalPrice,amount) value (?,?,?,?)", [id, product, totalPrice, amount])
}

module.exports.updateAmount = (amount, id) => {
    return db.execute("update tbl_cart set amount=? where tbl_cart.cartID= ?", [amount, id])
}
module.exports.deleteCart = (cartID) => {
    return db.execute("delete from tbl_cart where cartID= ?", [cartID]);
}