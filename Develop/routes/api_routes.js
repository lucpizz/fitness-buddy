const router = require("express").Router();

router.route("/workouts").get((req, res) => {
  res.json({ success: true });
});

module.exports = router;
