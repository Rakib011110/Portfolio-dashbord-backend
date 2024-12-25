const Project = require("./ProjectModel");

const createProject = async (data) => {
  return await Project.create(data);
};

const getProjects = async () => {
  return await Project.find();
};

const updateProject = async (id, data) => {
  return await Project.findByIdAndUpdate(id, data, { new: true });
};
const getProjectById = async (id) => {
  return await Project.findById(id);
};

const deleteProject = async (id) => {
  await Project.findByIdAndDelete(id);
  return { message: "Project deleted successfully" };
};

module.exports = {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  getProjectById,
};
