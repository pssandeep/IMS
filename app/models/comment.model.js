module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comments", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    ticketId: {
      type: Sequelize.INTEGER,
    },    
    comment: {
      type: Sequelize.TEXT,
    },
    edited: {
      type: Sequelize.BOOLEAN,
    },
    author: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  
  {
    timestamps: true,
    classMethods: {
     associate: function (models) {
      Comment.hasMany(models.Ticket);
     }
    }
   }
  
  );

  return Comment;
};

console.log('comment.model.js');
