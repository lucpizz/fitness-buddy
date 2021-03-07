const router = require("express").Router();
const path = require("path");
//const apiRoutes = require("./api_routes");

//router.route("/api", apiRoutes);

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "/../public/stats.html"));
});

router.route("/exericse").get((req, res) => {
  res.sendFile(path.join(__dirname, "/../public/exercise.html"));
});

module.exports = router;
