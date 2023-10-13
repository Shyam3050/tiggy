const Restaurents = require("../models/restaurentModel")
exports.getAllRestaurent = async (req, res) => {
  try {
    const allRes = await Restaurents.find()
    res.status(200).json({
      status: "success",
      data: allRes,
    });
  } catch {}
};
