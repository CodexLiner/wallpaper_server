const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const category = require("./routes/category");
const wallpaper = require("./routes/wallpapers");

app.use("/wallpaper", wallpaper);
app.use("/category",category)

app.listen(3000, () => {
  console.log("listning 3000");
});
