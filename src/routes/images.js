const express = require("express");
const {
  getRecentImages,
  searchImagesByTags,
} = require("../controllers/images");

const router = express.Router();

router.get("/recent", getRecentImages);
router.get("/search/:tag", searchImagesByTags);

module.exports = router;
