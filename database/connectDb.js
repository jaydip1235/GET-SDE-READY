const mongoose = require("mongoose");

const URL = "mongodb://127.0.0.1:27017/sm";

const connectDb = () => {
  mongoose
    .connect(URL)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = connectDb;
