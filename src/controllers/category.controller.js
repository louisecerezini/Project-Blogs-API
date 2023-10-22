const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  const category = req.body;
  const response = await categoryService.createCategory(category);
  return res.status(response.status).json(response.body);
};

const getCategories = async (_, res) => {
  const categories = await categoryService.getCategories();
  return res.status(categories.status).json(categories.body);
};

module.exports = {
  createCategory,
  getCategories,
};