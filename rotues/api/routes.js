const express = require("express");
const router = express.Router();
const bookController = require("../../controller/bookController");
const userController = require("../../controller/userController");
const authController = require("../../controller/authController");
const auth = require("../../middleware/auth");

// users
router.post("/users/register", userController.register);
router.post("/auth", authController.auth);

// books
router.post("/book", auth, bookController.create);
router.get("/books", auth, bookController.books);
router.get("/book/:id", bookController.book);
router.delete("/book/:id", bookController.book_delete);
router.put("/book/:id", bookController.book_update);

module.exports = router;
