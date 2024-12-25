const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const dbConnection = require("./db/db.config");
const router = require("./router/index.js");

const app = express();

app.use(cors());
app.use(bodyparser.json());
dbConnection();

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app;
