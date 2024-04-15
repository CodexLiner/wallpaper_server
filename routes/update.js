const express = require("express");
const axios = require("axios");
const router = express.Router();

const db = require("../database/db.js");
const { v4: uuidv4 } = require("uuid");
const multer = require("multer");
const { Blob } = require("buffer");
const upload = multer();

const {
    CREATE_WALLPAPER_TABLE,
    DELETE_WALLPAPER
} = require("../database/queries.js");

router.get("/delete", async (req, res) => {
    await db.executeQuery(CREATE_WALLPAPER_TABLE);
    const result = await db.executeQuery(DELETE_WALLPAPER, req.query.uuid);
    console.log(result.affectedRows)
    if (result != null && result.affectedRows > 0) {
        //todo: delete from files
        const requestData = {
            name: req.query.name,
            category: req.query.category,
        };
        console.log(requestData)
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',

        };
        const ax = await axios.post("https://meenagopal24.me/wallpaperapi/delete.php", requestData, { headers });
        console.log(ax)
        if (ax.status == 'success') {
            res.send({ "status": true })
        } else {
            res.send({ "status": false })
        }
    } else {
        res.send({ "status": false })

    }

})

module.exports = router;


const let = fetch("https://www.fakedataapi.com/v1/search/q?=Water")
            .then()
            .catch()
