// Importing dependencies
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("DRAWING");
});

module.exports = router;
