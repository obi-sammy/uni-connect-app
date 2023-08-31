const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const mainController = require("../controllers/main");
const { ensureAuth } = require("../middleware/auth");

//Main Routes 
router.get("/", homeController.getIndex);
router.get("/profile/:id", ensureAuth, mainController.getProfile);
router.get("/customizeProfile", ensureAuth, mainController.getCustomizeProfile);
router.put("/customizeProfile", upload.single("file"), mainController.putCustomizeProfile);
router.get("/feed", ensureAuth, mainController.getFeed);
router.get("/notification", ensureAuth, mainController.getNotification);
router.put("/connect/:id", mainController.putConnection);
// router.delete("/notification/")

//Routes for user login/signup
router.post("/login", authController.postLogin);
router.get("/logout", ensureAuth, authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
