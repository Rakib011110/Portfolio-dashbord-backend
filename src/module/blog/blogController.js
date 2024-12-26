const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("./blogService");

exports.createBlog = async (req, res) => {
  try {
    const photoUrl = req.file ? `/uploads/${req.file.filename}` : null;
    const blogData = { ...req.body, photoUrl };
    const blog = await createBlog(blogData);
    res.status(201).json({ message: "Blog created successfully", blog });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await getBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await getBlogById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const photoUrl = req.file
      ? `/uploads/${req.file.filename}`
      : req.body.photoUrl;
    const updatedData = { ...req.body, photoUrl };
    const updatedBlog = await updateBlog(id, updatedData);
    res.status(200).json({ message: "Blog updated successfully", updatedBlog });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteBlog(id);
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
