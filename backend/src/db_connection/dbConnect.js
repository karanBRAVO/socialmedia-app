const MONGOOSE = require("mongoose");

const URL = "mongodb://0.0.0.0:27017/social-media-app";

MONGOOSE.connect(URL)
  .then(() => {
    console.log(`[+] Connected to Database`);
  })
  .catch((err) => {
    console.log(err);
  });
