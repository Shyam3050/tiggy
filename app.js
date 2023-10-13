const express = require("express");
const app = express();
const restaurantRoute = require("./routes/restaurentRoute");

app.use("/api/restaurents", restaurantRoute);

module.exports = app;
