const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost:27017/databases");

app.listen(3001, () => {
  console.log("Server is running");
});
