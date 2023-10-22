const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      categoryId: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      underscored: true,
      tableName: 'posts_categories',
      timestamps: false,
    }
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  return PostCategory;
};

module.exports = PostCategoryModel;
