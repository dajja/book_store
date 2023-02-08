const db = require("../utils/database.js");
module.exports.renderAll = () => {
    return db.execute('select * from tbl_product');
};

