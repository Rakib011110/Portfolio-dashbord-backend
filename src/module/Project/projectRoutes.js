const express = require("express");
const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  getProjectById,
} = require("../Project/projectController");

const router = express.Router();

router.post("/", createProject);

router.get("/", getProjects);

router.put("/:id", updateProject);
router.get("/:id");
router.get("/:id", getProjectById);

router.delete("/:id", deleteProject);

module.exports = router;
