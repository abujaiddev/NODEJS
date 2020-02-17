const express = require("express");
const router = express.Router();
const bookController = require("../../controller/book");

router.post("/book", bookController.create);
router.get("/books", bookController.books);
router.get("/book/:id", bookController.book);
router.delete("/book/:id", bookController.book_delete);

module.exports = router;
