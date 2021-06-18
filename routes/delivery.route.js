const express = require("express");
var router = express.Router();
const Delivery = require("../model/Delivery.model");

// index dispaly

router.get("/index", async (req, res) => {
  let data = await Delivery.find();
  res.render("delivery/index", { data, person: {} });
});

// add delivery person
router.post("/add", async (req, res) => {
  try {
    let delivery = new Delivery(req.body);
    await delivery.save();

    res.redirect("/delivery/index");
  } catch (error) {
    console.error(error);
    res.render("error", { message: "Internal Server Error",error });
  }
});

// details delivery persons
router.get("/:name", async (req, res) => {
  try {
    let { name } = req.params;
    let person = await Delivery.findOne({ name });
    if (person) {
    
      res.render("delivery/detailDelivery", { person });
    }
  } catch (error) {
    console.error(error);
    res.render("error", { message: "Internal Server Error" ,error});
  }
});

// edit delivery person data
router.post("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { name } = req.body;
   
    await Delivery.findByIdAndUpdate(id, req.body);
    res.redirect("/delivery/" + name);
  } catch (error) {
    console.error(error);
    res.render("error", { message: "Internal Server Error",error });
  }
});

// delete delivery person
router.get("/delete/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Delivery.findByIdAndDelete(id);
    res.redirect("/delivery/index");
  } catch (error) {
    console.error(error);
    res.render("error", { message: "Internal Server Error" ,error});
  }
});

module.exports = router;
