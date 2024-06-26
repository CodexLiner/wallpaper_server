const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());

const category = require("./routes/category");
const wallpaper = require("./routes/wallpapers");
const update = require("./routes/update");


app.use("/wallpaper", wallpaper);
app.use("/update", update);
app.use("/category", category);
app.use("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/privacy.html"));
});
app.get("/privacy", (req, res) => {
  res.sendFile(path.join(__dirname + "/privacy.html"));
});
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});
