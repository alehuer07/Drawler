// Importing dependencies
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("SESSION");
});

router.get("/get-sessions", (req, res) => {
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

router.get("/create-session", (req, res) => {
  rand_session_ID = Math.floor(Math.random() * (99999 - 9999) + 9999);

  new_session = {
    sessionID: rand_session_ID,
    phase: 0,
    players: {
      player_143: {
        session_adjectives: [],
        session_nouns: [],
        session_characters: {
          char1: {},
          char2: {},
          char3: {},
        },
      },

      player_318: {
        session_adjectives: [],
        session_nouns: [],
        session_characters: {
          char1: {},
          char2: {},
          char3: {},
        },
      },
    },

    battles: {},
  };

  let fs = require("fs");

  fs.readFile("./db2.json", "utf-8", (err, data) => {
    if (err) throw err;
    let json_object = JSON.parse(data);

    json_object.sessions_table.push(new_session);

    // console.log(json_object);

    fs.writeFile("./db2.json", JSON.stringify(json_object), (err) => {
      if (err) throw err;
      console.log("data written to file");
    });
    res.send(json_object);
  });
});

module.exports = router;
