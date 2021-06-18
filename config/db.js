const mongoose = require("mongoose");

let db = () => {
  mongoose
    .connect("mongodb+srv://admin:admin@sandbox.q8xnp.mongodb.net/swiggy?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then((db) => {
      console.log(
        `DB connected, Host : ${db.connections[0].host} , Port: ${db.connections[0].port}, Database: ${db.connections[0].name} `
      );
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = db;
