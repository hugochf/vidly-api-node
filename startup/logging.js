const winston = require("winston");
// require('winston-mongodb');
require("express-async-errors");

module.exports = function () {
  // process.on('uncaughtException', (ex) => {
  //     winston.error(ex.message, ex);
  //     process.exit(1);
  // });

  // winston.handleExceptions(
  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );

  process.on("unhandledRejection", (ex) => {
    throw ex;
    // winston.error(ex.message, ex);
    // process.exit(1);
  });

  winston.add(new winston.transports.File({ filename: "logfile.log" }));
  // winston.add(new winston.transports.MongoDB({
  //     db: 'mongodb://127.0.0.1:27017/vidly',
  //     level: 'info'
  // }));
};
