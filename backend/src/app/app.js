const EXPRESS = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// connecting to database
require("../db_connection/dbConnect");

// routes
const CAMERA_ROUTER = require("../routes/cam_router");

const APP = EXPRESS();

// configurations
const PORT = process.env.PORT || 3190;

// middlewares
APP.use(
  EXPRESS.urlencoded({
    extended: false,
  })
);
APP.use(EXPRESS.json());
APP.use(cookieParser());
APP.use(cors());
APP.use("/camera", CAMERA_ROUTER);

// starting listener
APP.listen(PORT, (err) => {
  if (err) {
    console.log(`[-] Error while starting listener`);
    console.log(err);
  } else {
    console.log(`[+] Listener started successfully | Port: ${PORT}`);
  }
});
