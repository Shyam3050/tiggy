const mongoose = require("mongoose");

const resSchema = mongoose.Schema({
  info: {
    id: String,
    name: String,
    cloudinaryImageId: String,
    locality: String,
    cuisines: Array,
    avgRatingString: String,
  },
});
const Restaurents = mongoose.model("Restaurents", resSchema);
module.exports = Restaurents;
