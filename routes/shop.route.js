const express = require("express");
var router = express.Router();
const Shop = require("../model/Shop.model");

// index dispaly

router.get("/index", async (req, res) => {
  let data = await Shop.find();
  res.render("shop/index", { data, shop: {} });
});

// add restarents
router.post("/add", async (req, res) => {
  try {
    let shop = new Shop(req.body);
    await shop.save();
    res.redirect("/shop/index");
  } catch (error) {
    console.error(error);
    res.render("error", { message: "Internal Server Error",error });
  }
});

// details of Restarents
router.get("/:name", async (req, res) => {
  try {
    let { name } = req.params;
    let shop = await Shop.findOne({ name });
    if (shop) {
      res.render("shop/detailRest", { shop });
    }
  } catch (error) {
    console.error(error);
    res.render("error", { message: "Internal Server Error" ,error});
  }
});

// edit  shop data
router.post("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { name } = req.body;

    await Shop.findByIdAndUpdate(id, req.body);
    res.redirect("/shop/" + name);
  } catch (error) {
    console.error(error);
    res.render("error", { message: "Internal Server Error",error });
  }
});

// delete shop
router.get("/delete/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Shop.findByIdAndDelete(id);
    res.redirect("/shop/index");
  } catch (error) {
    console.error(error);
    res.render("error", { message: "Internal Server Error",error });
  }
});

module.exports = router;
