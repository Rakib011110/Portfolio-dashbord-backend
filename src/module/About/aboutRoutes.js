const express = require("express");
const {
  createAbout,
  getAbout,
  updateAbout,
  deleteAbout,
} = require("./aboutController");

const router = express.Router();

router.post("/", createAbout);

router.get("/", getAbout);

router.put("/:id", updateAbout);

router.delete("/:id", deleteAbout);

module.exports = router;
