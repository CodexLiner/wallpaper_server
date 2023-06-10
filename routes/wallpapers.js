const express = require("express");
const axios = require("axios");
const router = express.Router();

//for getting recent wallpapers
router.get("/", async (request, response) => {
  const wallpapers = [
    {
      url: "https://images.pexels.com/photos/1366913/pexels-photo-1366913.jpeg",
      name: "Random Name",
    },
    {
      url: "https://images.pexels.com/photos/3881034/pexels-photo-3881034.jpeg",
      name: "Random Name",
    },
    {
      url: "https://images.pexels.com/photos/568948/pexels-photo-568948.jpeg",
      name: "Random Name",
    },
    {
      url: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
      name: "Random Name",
    },

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
