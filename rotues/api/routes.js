const express = require("express");
const router = express.Router();
const postController = require("../../controller/postController");
const userController = require("../../controller/userController");
const profileController = require("../../controller/profileController");
const authController = require("../../controller/authController");
const auth = require("../../middleware/auth");
const friendController = require("../../controller/friendsController");
const addressContorller = require("../../controller/addressController");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    // cb(null, Date.now() + "-" + file.originalname);
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage
});

// users
router.post("/registerUser", userController.registerUser);
router.get("/users", auth, userController.users);
// router.put("/user", auth, userController.updateUser);
router.get("/profile", auth, userController.profile);
router.post("/auth", authController.auth);
router.put("/profile/me", auth, userController.profileMe);
router.get("/user/profile", auth, profileController.getUserProfileImage);
router.post("/user/profile", upload.any(), auth, profileController.profile);
router.put(
  "/user/profileUpdate",
  upload.single("userPhoto"),
  auth,
  profileController.profileUpdate
);

// User
router.get("/userAddress", auth, addressContorller.address);
router.put("/userAddress", auth, addressContorller.addressUpdate);

// Friends
// router.put("/friendRequest/:id", auth, friendController.friendRequest);
router.put("/friendRequest/:id", auth, friendController.friendRequest);
router.get("/friends", auth, friendController.friends);
router.get("/friend/:id", auth, friendController.friend);

// posts
router.post("/post", auth, postController.create);
router.get("/posts", auth, postController.posts);
router.get("/post/:id", postController.post);
router.delete("/post/:id", auth, postController.post_delete);
router.put("/post/:id", postController.post_update);

module.exports = router;
