const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const category = require("./routes/category");
const wallpaper = require("./routes/wallpapers");

app.use("/wallpaper", wallpaper);
app.use("/category", category);
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});
