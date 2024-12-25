const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    skills: {
      frontend: [{ type: String }],
      backend: [{ type: String }],
      tools: [{ type: String }],
    },
    education: [
      {
        institution: { type: String, required: false },
        degree: { type: String, required: false },
        year: { type: Number, required: false },
      },
    ],
  },
  { timestamps: true }
);

const About = mongoose.model("About", aboutSchema);

module.exports = About;
