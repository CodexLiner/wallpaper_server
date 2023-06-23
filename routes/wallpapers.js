const express = require("express");
const axios = require("axios");
const router = express.Router();
const db = require("../database/db.js");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const { Blob } = require("buffer");
const upload = multer();
const fs = require("fs");
const {
  CREATE_WALLPAPER_TABLE,
  GET_RECENT,
  GET_WALLPAPER_BY_CATEGORY,
  INSERT_INTO_WALLPAPER,
} = require("../database/queries.js");

//for getting recent wallpapers
router.get("/", async (request, response) => {
  await db.executeQuery(CREATE_WALLPAPER_TABLE);
  const result = await db.executeQuery(GET_RECENT);

  response.send({ result });
});

//for getting category wise wallapaper
router.get("/get", async (request, response) => {
  await db.executeQuery(CREATE_WALLPAPER_TABLE);
  console.log("sdsd" + request.query.category);
  const result = await db.executeQuery(
    GET_WALLPAPER_BY_CATEGORY,
    request.query.category
  );
  response.send({ result });
});

router.post(
  "/",
  upload.fields([{ name: "name" }, { name: "category" }, { name: "filename" }]),
  async (req, res) => {
    await db.executeQuery(CREATE_WALLPAPER_TABLE);
    const { name, filename, category } = req.body;
    console.log(req.body);
    if (name == null || filename == null || category == null) {
      console.log("one of the field is null");
      res.send({code : "null"});
      return
    }
    const result = await db.executeQuery(INSERT_INTO_WALLPAPER, [
      name,
      filename,
      uuidv4(),
      category,
      filename,
    ]);

    res.send({ result });
  }
);

module.exports = router;
