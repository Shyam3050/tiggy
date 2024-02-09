const express = require("express");
const app = express();
const restaurantRoute = require("./routes/restaurentRoute");
const cors = require('cors')

app.use("/api/restaurents", restaurantRoute);

app.use(cors());
app.options("*", cors());

app.use("/", (req, res) =>
  res.status(400).json({
    data: "mainfile",
  })
);
module.exports = app;
