const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  getProjectById,
} = require("../Project/projectService");

exports.createProject = async (req, res) => {
  try {
    const project = await createProject(req.body);
    res.status(201).json({ message: "Project created successfully", project });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateProject = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProject = await updateProject(id, req.body);
    res
      .status(200)
      .json({ message: "Project updated successfully", updatedProject });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await getProjectById(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteProject(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
