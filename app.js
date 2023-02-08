const express = require('express')
const app = express()
const port = 3001
const fs = require('fs')
const bodyParser = require('body-parser')
const morgan = require('morgan');

const db = require('./utils/database');
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.set("view engine", 'ejs');

const userRoutes = require("./routes/routes.js");
const cartRoutes = require("./routes/cart.routes.js");
app.use('/api/v1', userRoutes);
app.use('/api/v1/cart', cartRoutes);
app.get("/api/v1/product/post", (req, res) => {
  fs.readFile("./dev-data/products.json", "utf8", (err, data) => {
    if (err) throw err;
    let arr = JSON.parse(data);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      let value = [
        arr[i].id,
        arr[i].title,
        arr[i].imageUrl,
        arr[i].description,
        arr[i].price,
      ];
      db.query("INSERT INTO tbl_product VALUES (?,?,?,?,?)", value);
    }
    res.json({ message: "success" });
  })
})
app.get("/db", (req, res) => {
  fs.readFile("./dev-data/products.json", "utf8", (err, data) => {
    if (err) throw err;
    let arr = JSON.parse(data);
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      let value = [
        arr[i].id,
        arr[i].title,
        arr[i].imageUrl,
        arr[i].description,
        arr[i].price,
      ];
      db.query("select * from tbl_product", value);
    }
    res.json({
      message: "success",
      data: arr
    });
  })
})
app.get("/", (req, res) => {
  res.render('home');
})
app.get("/cart", (req, res) => {
  res.render("cart");
})

app.get("/admin", (req, res) => {
  res.render("admin");
})
app.get("/products", (req, res) => {
  res.render("products");
})
app.get("/additem", (req, res) => {
  res.render("addItem");
})

app.listen(port, () => {
  console.log(`Port is http://localhost:${port}`)
})