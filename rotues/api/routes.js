const express = require("express");
const router = express.Router();
const postController = require("../../controller/postController");
const userController = require("../../controller/userController");
const authController = require("../../controller/authController");
const auth = require("../../middleware/auth");

// users
router.post("/registerUser", userController.registerUser);
router.get("/profile", auth, userController.profile);
router.post("/auth", authController.auth);
router.put("/profile/me", auth, userController.profileMe);

// posts
router.post("/post", auth, postController.create);
router.get("/posts", auth, postController.posts);
router.get("/post/:id", postController.post);
router.delete("/post/:id", auth, postController.post_delete);
router.put("/post/:id", postController.post_update);

module.exports = router;
