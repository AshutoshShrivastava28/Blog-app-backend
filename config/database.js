const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB Connnection Succesfull."))
    .catch((err) => {
      console.log(err);
      console.error(err);
      process.exit(1);
    });
};

module.exports = connectWithDb;
