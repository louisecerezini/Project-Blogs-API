
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id:                         
      {
        allowNull: false,         
        autoIncrement: true,      
        primaryKey: true,        
        type: Sequelize.INTEGER,  
      },
      title:
      {
        allowNull: false,
        type: Sequelize.STRING,  
      },
      content:
      {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id:                     
      {
        type: Sequelize.INTEGER,  
        allowNull: true,         
        onUpdate: 'CASCADE',      
        onDelete: 'CASCADE',       
        references: {             
          model: 'users',         
          key: 'id',              
        }
      },
      published:                    
      {
        allowNull: true,             
        type: Sequelize.DATE,         
        defaultValue: new Date(),  
      },
      updated:                        
      {
        allowNull: true,             
        type: Sequelize.DATE,        
        defaultValue: new Date(),  
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('BlogPosts');
  }
};


