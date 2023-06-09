const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", (req, res) => {
    const categories = [
        {
          name: "Superhero",
          url: "https://e1.pxfuel.com/desktop-wallpaper/158/190/desktop-wallpaper-superhero-iphone-posted-by-ryan-mercado-ultra-superhero-iphone.jpg",
        },
        {
          name: "Nature",
          url: "https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg",
        },
        {
          name: "Abstract",
          url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        },
        {
          name: "Sports",
          url: "https://wallpapercave.com/wp/wp2839196.jpg",
        },
        {
          name: "Shapes",
          url: "https://phandroid.com/wp-content/uploads/2015/05/bucker-wallpaper-1.jpg",
        },
        {
          name: "Stock",
          url: "https://wallpapers.com/images/featured/fzvzvvps0jviump3.jpg",
        },
        {
          name: "Amoled",
          url: "https://w0.peakpx.com/wallpaper/202/291/HD-wallpaper-eyes-iphone-amoled-dark-samsung-anime.jpg",
        },
        {
          name: "Games",
          url: "https://wallpapers.com/images/hd/hd-gas-mask-soldier-gaming-cover-f11x0g0kapz25a21.jpg",
        },
      ];
  res.send({categories});
});

module.exports = router;
