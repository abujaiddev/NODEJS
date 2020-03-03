const express = require("express");
const router = express.Router();
const postController = require("../../controller/postController");
const userController = require("../../controller/userController");
const authController = require("../../controller/authController");
const auth = require("../../middleware/auth");

// users
router.post("/users/register", userController.register);
router.post("/auth", authController.auth);

// books
router.post("/post", auth, postController.create);
router.get("/books", auth, postController.books);
router.get("/booksByUser", postController.booksByUser);
router.get("/book/:id", postController.book);
router.delete("/book/:id", auth, postController.book_delete);
router.put("/book/:id", postController.book_update);

module.exports = router;
