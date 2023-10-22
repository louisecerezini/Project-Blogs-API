const { Op } = require('sequelize'); 
const { BlogPost, Category, PostCategory } = require('../models');

const createBlogPost = async (blogPost) => {
  if (!blogPost.title || !blogPost.content) {
    return { status: 400, body: { message: 'Some required fields are missing' } };
  }

  const categoryCount = await Category.count({
    where: { id: { [Op.in]: blogPost.categoryIds } },
  });

  if (categoryCount !== blogPost.categoryIds.length) {
    return { status: 400, body: { message: 'one or more "categoryIds" not found' } };
  }

  const newPost = await BlogPost.create(blogPost);

  const postCategories = blogPost.categoryIds.map((categoryId) =>
   ({ postId: newPost.id, categoryId }));

  await PostCategory.bulkCreate(postCategories);

  const response = await BlogPost.findByPk(newPost.id);

  return { status: 201, body: response };
};

module.exports = {
  createBlogPost, 
};