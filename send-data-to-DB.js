const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const Restaurents = require("./models/restaurentModel");

dotenv.config({ path: "./config.env" });

const app = require("./app");

const allRes = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const sendDataToDB = async () => {
  try {
    await Restaurents.create(allRes);
    console.log("data uploaded.......");
  } catch {}
};

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

sendDataToDB();
