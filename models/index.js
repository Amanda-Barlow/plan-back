const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL;
const Plan = require('./plan')
require ('dotenv').config()

// DATABASE CONNECTION
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB')
    });

// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

  module.exports = Plan