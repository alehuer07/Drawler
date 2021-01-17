// Importing dependencies
const express = require("express");
const router = express.Router();
const cors = require("cors");

const db = require("../firebase/firebase");

router.use(cors());

router.get("/", (req, res) => {
  res.send("SESSION");
});

router.get("/get-sessions", (req, res) => {
  db.collection("sessions")
    .get()
    .then((querySnapshot) => {
      const documents = querySnapshot.docs.map((doc) => doc.data());
      // do something with documents
      res.json(documents);
    })
    .catch((err) => {
      res.send("error: " + err);
    });
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
