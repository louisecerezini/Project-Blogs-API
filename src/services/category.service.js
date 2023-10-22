const { Category } = require('../models');

const createCategory = async (category) => {
  if (!category.name) return { status: 400, body: { message: '"name" is required' } };

  const newCategory = await Category.create(category);
  return { status: 201, body: newCategory };
};

const getCategories = async () => {
  const categories = await Category.findAll();
  return { status: 200, body: categories };
};

module.exports = {
  createCategory, 
  getCategories,
};