const mongoose = require("mongoose");
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const db = () =>
  mongoose
    .connect(process.env.MONGO_URI, dbOptions)
    .then(() => console.info("connected to MongoDB"))
    .catch((err) => console.error(err));

module.exports = db;
