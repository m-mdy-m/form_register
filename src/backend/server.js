const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes.js");

app.use(cors());
app.use(bodyParser.json());
app.use("/register", routes);

app.listen(3000, () => {
  console.log("Created Server");
});