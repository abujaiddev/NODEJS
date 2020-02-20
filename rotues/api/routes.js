const express = require("express");
const router = express.Router();
const bookController = require("../../controller/book");
const userController = require("../../controller/user");
const authController = require("../../controller/auth");

// users
router.post("/users/register", userController.register);
router.post("/auth", authController.auth);

// books
router.post("/book", bookController.create);
router.get("/books", bookController.books);
router.get("/book/:id", bookController.book);
router.delete("/book/:id", bookController.book_delete);
router.put("/book/:id", bookController.book_update);

module.exports = router;
