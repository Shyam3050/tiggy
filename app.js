const express = require("express");
const app = express();
const restaurantRoute = require("./routes/restaurentRoute");

app.use("/api/restaurents", restaurantRoute);

app.use("/", (req, res) =>
  res.status(400).json({
    data: "mainfile",
  })
);
module.exports = app;
