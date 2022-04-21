const express = require("express");
const note = require("./data/note");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("ALHAMDULILLAH its get");
});

app.get("/api/note", (req, res) => {
  res.json(note);
});

app.get("/api/note/:id", (req, res) => {
  const notes = note.find((n) => n._id === req.params.id);
  res.send(notes);
});
const port = process.env.PORT || 1000
app.listen(port, console.log(`ALHAMDULILLAH we are on ${port}`));
