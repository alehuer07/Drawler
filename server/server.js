// Importing dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Importing routes
const user = require("./routes/user");
const session = require("./routes/session");
const drawing = require("./routes/drawing");
const battle = require("./routes/battle");

const app = express();
app.use(cors());

// Body Parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/user", user);
app.use("/session", session);
app.use("/drawing", drawing);
app.use("/battle", battle);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Drawler-server listening at http://localhost:${PORT}`);
});
