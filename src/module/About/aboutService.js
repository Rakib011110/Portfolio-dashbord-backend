const About = require("./About");

const createAbout = async (data) => {
  const about = await About.create(data);
  return about;
};

const getAbout = async () => {
  const about = await About.find();
  return about;
};

const updateAbout = async (id, data) => {
  const updatedAbout = await About.findByIdAndUpdate(id, data, { new: true });
  return updatedAbout;
};

const deleteAbout = async (id) => {
  await About.findByIdAndDelete(id);
  return { message: "About entry deleted successfully" };
};

module.exports = { createAbout, getAbout, updateAbout, deleteAbout };
