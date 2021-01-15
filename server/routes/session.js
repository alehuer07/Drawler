// Importing dependencies
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("SESSION");
});

router.get("/create_session", (req, res) => {
  // Declare variables
  let fs = require("fs");
  let obj;

  // Read the file and send to the callback
  fs.readFile("./db.json", handleFile);

  // Write the callback function
  function handleFile(err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    // You can now play with your data
    console.log(obj);
    res.send(obj);
  }
});

module.exports = router;
