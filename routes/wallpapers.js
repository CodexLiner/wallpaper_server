const express = require("express");
const axios = require("axios");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

//for getting recent wallpapers
router.get("/", async (request, response) => {
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
  const wallpapers = [
		{
			"url": "https://images.pexels.com/photos/1366913/pexels-photo-1366913.jpeg",
			"name": "Random Name 1",
			"uuid": "599debf9-a890-4c5f-a95d-293822650a22"
		},
		{
			"url": "https://images.pexels.com/photos/3881034/pexels-photo-3881034.jpeg",
			"name": "Random Name 2",
			"uuid": "3057fc3f-d92a-41d4-9630-aaaee292b7a6"
		},
		{
			"url": "https://images.pexels.com/photos/568948/pexels-photo-568948.jpeg",
			"name": "Random Name 3",
			"uuid": "899c53e4-a905-4b49-a4e1-1cd4aaf4189e"
		},
		{
			"url": "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
			"name": "Random Name 4",
			"uuid": "d87c773a-41fc-4e97-88b3-14f8c2280920"
		},
		{
			"url": "https://images.pexels.com/photos/1420226/pexels-photo-1420226.jpeg",
			"name": "Random Name 5",
			"uuid": "253433ff-1b51-4a07-a3de-8e68d4bf0242"
		},
		{
			"url": "https://images.pexels.com/photos/6691950/pexels-photo-6691950.jpeg",
			"name": "Random Name 6",
			"uuid": "69377b0e-2300-4c8f-9f6b-4179d4c96286"
		},
		{
			"url": "https://images.pexels.com/photos/14286814/pexels-photo-14286814.jpeg",
			"name": "Random Name",
			"uuid": "6c46254b-3c24-4037-b93d-24716a218907"
		},
		{
			"url": "https://images.pexels.com/photos/11200581/pexels-photo-11200581.jpeg",
			"name": "Random Name",
			"uuid": "cc075ed1-6c52-4e43-9507-42a2e3b945f0"
		},
		{
			"url": "https://images.pexels.com/photos/10585143/pexels-photo-10585143.jpeg",
			"name": "Random Name",
			"uuid": "ee846fc2-0aba-4bbc-8f2e-93031208dba3"
		},
		{
			"url": "https://images.pexels.com/photos/5846273/pexels-photo-5846273.jpeg",
			"name": "Random Name",
			"uuid": "e05256ea-b33e-469b-b176-4c64d4c6ba24"
		},
		{
			"url": "https://images.pexels.com/photos/11200581/pexels-photo-11200581.jpeg",
			"name": "Random Name",
			"uuid": "a615fb47-f285-47ed-9629-1b7a053a285f"
		},
		{
			"url": "https://images.pexels.com/photos/13530493/pexels-photo-13530493.jpeg",
			"name": "Random Name",
			"uuid": "269260e9-ac08-48ff-b349-a202d41acbc5"
		}
	]
  response.send({ wallpapers });
});

//for getting category wise wallapaper
router.get("/:category", async (request, response) => {
  const wallpapers = [
    {
      url: "https://images.pexels.com/photos/1420226/pexels-photo-1420226.jpeg",
      name: "Random Name",
    },
    {
      url: "https://images.pexels.com/photos/6691950/pexels-photo-6691950.jpeg",
      name: "Random Name",
    },
    {
      url: "https://images.pexels.com/photos/14286814/pexels-photo-14286814.jpeg",
      name: "Random Name",
    },
    {
      url: "https://images.pexels.com/photos/11200581/pexels-photo-11200581.jpeg",
      name: "Random Name",
    },
    {
      url: "https://images.pexels.com/photos/10585143/pexels-photo-10585143.jpeg",
      name: "Random Name",
    },
    {
      url: "https://images.pexels.com/photos/5846273/pexels-photo-5846273.jpeg",
      name: "Random Name",
    },
    {
      url: "https://images.pexels.com/photos/11200581/pexels-photo-11200581.jpeg",
      name: "Random Name",
    },
    {
      url: "https://images.pexels.com/photos/13530493/pexels-photo-13530493.jpeg",
      name: "Random Name",
    },
  ];
  response.send({ wallpapers });
});

module.exports = router;
