const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      published: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      updated: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      underscored: true,
      timestamps: false,
    }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    });
  }

  return BlogPost;
};

module.exports = BlogPostModel;
