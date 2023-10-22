const { blogPostService } = require('../services');

const createBlogPost = async (req, res) => {
  const blogPost = { ...req.body, userId: req.user.id };
  const response = await blogPostService.createBlogPost(blogPost);
  return res.status(response.status).json(response.body);
};

module.exports = {
  createBlogPost,
};