/*
  Default generated code for express server
*/

//require("dotenv").config();
const express = require("express");
//const path = require("path");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.use(morgan("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.use(require("./routes/api_routes.js"));
app.use(require("./routes/html_routes.js"));

//app.use(require("./public/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
