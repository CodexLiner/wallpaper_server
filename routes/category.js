const express = require("express");
const db = require("../database/db.js");
const axios = require("axios");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const upload = multer();
const fs = require("fs");
const {
  CREATE_CATEGORY_TABLE,
  GET_ALL_CATEGORY,
  INSERT_INTO_CATEGORY,
} = require("../database/queries.js");

router.get("/", async (req, res) => {
  await db.executeQuery(CREATE_CATEGORY_TABLE);
  const result = await db.executeQuery(GET_ALL_CATEGORY);
  res.send({ result });
});

router.post("/", upload.single("image"), async (req, res) => {
  //create table is does not exist
  await db.executeQuery(CREATE_CATEGORY_TABLE);
  const { category } = req.body;
  const image = req.file;
  if (image == null || image == undefined) {
    res.send({ status: "image not found" });
    return;
  }

  const tempFilePath = `temp_${Date.now()}_${image.originalname}`;
  fs.writeFileSync(tempFilePath, image.buffer);

  const imageBlob = new Blob([image.buffer], { type: image.mimetype });

  const formData = new FormData();
  formData.append("image", imageBlob, image.originalname);

  formData.append("category", "category_thumbnails");
  axios
    .post("https://meenagopal24.me/wallpaperapi/upload.php", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(async (response) => {
      if (response.data.status === "success") {
        const result = await db.executeQuery(INSERT_INTO_CATEGORY, [
          category,
          response.data.fileName,
          response.data.fileName,
          uuidv4(),
        ]);
        res.send({ result });
      } else res.sendStatus(400);
    })
    .catch((error) => {
      res.send(error);
    });

  fs.unlinkSync(tempFilePath);
});

module.exports = router;

// const categories = [
//   {
//     name: "Superhero",
//     url: "https://e1.pxfuel.com/desktop-wallpaper/158/190/desktop-wallpaper-superhero-iphone-posted-by-ryan-mercado-ultra-superhero-iphone.jpg",
//   },
//   {
//     name: "Nature",
//     url: "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
//   },
//   {
//     name: "Abstract",
//     url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
//   },
//   {
//     name: "Sports",
//     url: "https://wallpapercave.com/wp/wp2839196.jpg",
//   },
//   {
//     name: "Shapes",
//     url: "http://phandroid.com/wp-content/uploads/2015/05/bucker-wallpaper-1.jpg",
//   },
//   {
//     name: "Stock",
//     url: "https://wallpapers.com/images/featured/fzvzvvps0jviump3.jpg",
//   },
//   {
//     name: "Amoled",
//     url: "https://w0.peakpx.com/wallpaper/202/291/HD-wallpaper-eyes-iphone-amoled-dark-samsung-anime.jpg",
//   },
//   {
//     name: "Games",
//     url: "https://wallpapers.com/images/hd/hd-gas-mask-soldier-gaming-cover-f11x0g0kapz25a21.jpg",
//   },
// ];
// res.send({ categories });
