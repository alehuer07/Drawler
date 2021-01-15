// Importing dependencies
const express = require("express");

// Importing routes
const user = require("./routes/user");
const session = require("./routes/session");
const drawing = require("./routes/drawing");
const battle = require("./routes/battle");

const app = express();
const PORT = process.env.PORT || 5000;

// Routes
app.use("/user", user);
app.use("/session", session);
app.use("/drawing", drawing);
app.use("/battle", battle);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Drawler-server listening at http://localhost:${PORT}`);
});
