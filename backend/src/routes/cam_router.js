const EXPRESS = require("express");

const CAMERA_ROUTER = EXPRESS.Router();

CAMERA_ROUTER.get("/", (req, res) => {
  res.json({ message: "HELLO WORLD! | from server" });
});

module.exports = CAMERA_ROUTER;
