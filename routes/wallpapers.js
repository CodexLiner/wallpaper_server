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

    const result = await db.executeQuery(INSERT_INTO_WALLPAPER, [
      name,
      filename,
      uuidv4(),
      category,
      filename,
    ]);

    res.send({ result });

    // const tempFilePath = `temp_${Date.now()}_${image.originalname}`;
    // fs.writeFileSync(tempFilePath, image.buffer);

    // const imageBlob = new Blob([image.buffer], { type: image.mimetype });

    // const formData = new FormData();
    // formData.append("image", imageBlob, image.originalname);

    // formData.append("category", category);
    // axios
    //   .post("https://meenagopal24.me/wallpaperapi/upload.php", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then(async (response) => {
    //     console.log(category + " above");
    //     if (response.data.status == "success") {
    //       const result = await db.executeQuery(INSERT_INTO_WALLPAPER, [
    //         name,
    //         response.data.fileName,
    //         uuidv4(),
    //         category,
    //         response.data.fileName,
    //       ]);
    //       console.log(result);
    //       res.send({ result });
    //     } else {
    //       res.send({
    //         code: "else",
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     res.send(error);
    //   });

    // fs.unlinkSync(tempFilePath);
  }
);

module.exports = router;

// const wallpapers = [
//   {
//     url: "https://images.pexels.com/photos/1366913/pexels-photo-1366913.jpeg",
//     name: "Random Name 1",
//     uuid : uuidv4()
//   },
//   {
//     url: "https://images.pexels.com/photos/3881034/pexels-photo-3881034.jpeg",
//     name: "Random Name 2",
//     uuid : uuidv4()
//   },
//   {
//     url: "https://images.pexels.com/photos/568948/pexels-photo-568948.jpeg",
//     name: "Random Name 3",
//     uuid : uuidv4()
//   },
//   {
//     url: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
//     name: "Random Name 4",
//     uuid : uuidv4()
//   },

//   {
//     url: "https://images.pexels.com/photos/1420226/pexels-photo-1420226.jpeg",
//     name: "Random Name 5",
//     uuid : uuidv4()
//   },
//   {
//     url: "https://images.pexels.com/photos/6691950/pexels-photo-6691950.jpeg",
//     name: "Random Name 6",
//     uuid : uuidv4()
//   },
//   {
//     url: "https://images.pexels.com/photos/14286814/pexels-photo-14286814.jpeg",
//     name: "Random Name",
//     uuid : uuidv4()
//   },
//   {
//     url: "https://images.pexels.com/photos/11200581/pexels-photo-11200581.jpeg",
//     name: "Random Name",
//     uuid : uuidv4()
//   },
//   {
//     url: "https://images.pexels.com/photos/10585143/pexels-photo-10585143.jpeg",
//     name: "Random Name",
//     uuid : uuidv4()
//   },
//   {
//     url: "https://images.pexels.com/photos/5846273/pexels-photo-5846273.jpeg",
//     name: "Random Name",
//     uuid : uuidv4()
//   },
//   {
//     url: "https://images.pexels.com/photos/11200581/pexels-photo-11200581.jpeg",
//     name: "Random Name",
//     uuid : uuidv4()
//   },
//   {
//     url: "https://images.pexels.com/photos/13530493/pexels-photo-13530493.jpeg",
//     name: "Random Name",
//     uuid : uuidv4()
//   },
// ];
// const wallpapers = [
// 	{
// 		"url": "https://images.pexels.com/photos/1366913/pexels-photo-1366913.jpeg",
// 		"name": "Random Name 1",
// 		"uuid": "599debf9-a890-4c5f-a95d-293822650a22"
// 	},
// 	{
// 		"url": "https://images.pexels.com/photos/3881034/pexels-photo-3881034.jpeg",
// 		"name": "Random Name 2",
// 		"uuid": "3057fc3f-d92a-41d4-9630-aaaee292b7a6"
// 	},
// 	{
// 		"url": "https://images.pexels.com/photos/568948/pexels-photo-568948.jpeg",
// 		"name": "Random Name 3",
// 		"uuid": "899c53e4-a905-4b49-a4e1-1cd4aaf4189e"
// 	},
// 	{
// 		"url": "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
// 		"name": "Random Name 4",
// 		"uuid": "d87c773a-41fc-4e97-88b3-14f8c2280920"
// 	},
// 	{
// 		"url": "https://images.pexels.com/photos/1420226/pexels-photo-1420226.jpeg",
// 		"name": "Random Name 5",
// 		"uuid": "253433ff-1b51-4a07-a3de-8e68d4bf0242"
// 	},
// 	{
// 		"url": "https://images.pexels.com/photos/6691950/pexels-photo-6691950.jpeg",
// 		"name": "Random Name 6",
// 		"uuid": "69377b0e-2300-4c8f-9f6b-4179d4c96286"
// 	},
// 	{
// 		"url": "https://images.pexels.com/photos/14286814/pexels-photo-14286814.jpeg",
// 		"name": "Random Name",
// 		"uuid": "6c46254b-3c24-4037-b93d-24716a218907"
// 	},
// 	{
// 		"url": "https://images.pexels.com/photos/11200581/pexels-photo-11200581.jpeg",
// 		"name": "Random Name",
// 		"uuid": "cc075ed1-6c52-4e43-9507-42a2e3b945f0"
// 	},
// 	{
// 		"url": "https://images.pexels.com/photos/10585143/pexels-photo-10585143.jpeg",
// 		"name": "Random Name",
// 		"uuid": "ee846fc2-0aba-4bbc-8f2e-93031208dba3"
// 	},
// 	{
// 		"url": "https://images.pexels.com/photos/5846273/pexels-photo-5846273.jpeg",
// 		"name": "Random Name",
// 		"uuid": "e05256ea-b33e-469b-b176-4c64d4c6ba24"
// 	},
// 	{
// 		"url": "https://images.pexels.com/photos/11200581/pexels-photo-11200581.jpeg",
// 		"name": "Random Name",
// 		"uuid": "a615fb47-f285-47ed-9629-1b7a053a285f"
// 	},
// 	{
// 		"url": "https://images.pexels.com/photos/13530493/pexels-photo-13530493.jpeg",
// 		"name": "Random Name",
// 		"uuid": "269260e9-ac08-48ff-b349-a202d41acbc5"
// 	}
// ]
