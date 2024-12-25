const {
  createAbout,
  getAbout,
  updateAbout,
  deleteAbout,
} = require("./aboutService");

// Create a new About entry
exports.createAbout = async (req, res) => {
  try {
    const about = await createAbout(req.body);
    res
      .status(201)
      .json({ message: "About entry created successfully", about });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all About entries
exports.getAbout = async (req, res) => {
  try {
    const about = await getAbout();
    res.status(200).json(about);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an About entry
exports.updateAbout = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAbout = await updateAbout(id, req.body);
    res
      .status(200)
      .json({ message: "About entry updated successfully", updatedAbout });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an About entry
exports.deleteAbout = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteAbout(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
