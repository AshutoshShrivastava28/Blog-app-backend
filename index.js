const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 3000;

//MIDDLEWARE
app.use(express.json());

const blog = require("./routes/blog");

app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});
