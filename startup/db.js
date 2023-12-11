const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get("db");
  winston.add(
    new winston.transports.Console({ colorize: true, prettyPrint: true })
  );
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => winston.info(`Connected to ${db}...`));
};
