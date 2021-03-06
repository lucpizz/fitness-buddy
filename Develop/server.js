/*
  Default generated code for express server
*/

require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.use(require("./routes/html_routes"));
app.use(require("./api_routes/"));

mongoose.connect("mongodb://localhost/workout",
  process.env.MONGODB_URI || ""
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) throw err;
    app.listen(PORT, () => {
      console.log(`App is running on port: ${PORT}`);
    });
  }
);
