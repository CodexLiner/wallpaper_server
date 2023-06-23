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
  const { category, fileName } = req.body;
  console.log(category + "  " + fileName);
  if (category == null || fileName == null) {
    console.log("one of the field is null");
    res.send({ code: "null" });
    return
  }
  const result = await db.executeQuery(INSERT_INTO_CATEGORY, [
    category,
    fileName,
    fileName,
    uuidv4(),
  ]);

  res.send({ result });
});

module.exports = router;
