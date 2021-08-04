const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const { loggerStart } = require("./lib/misc");
const db = require("./lib/db");
const routes = require("./routes/index");


dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/", routes);
app.use("/api", routes);

const start = async () => {
  await db();
  app.listen(PORT, loggerStart(PORT));
};

start();
