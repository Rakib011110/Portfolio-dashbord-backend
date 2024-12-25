const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [{ type: String, required: true }],
    githubLink: { type: String, required: true },
    liveDemoLink: { type: String, required: false },
    photoUrl: { type: String, required: false },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
