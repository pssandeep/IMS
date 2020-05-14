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
  });

  Comment.associate = models => {
    Comment.belongsTo(models.Ticket);
  };

  return Comment;
};

console.log('comment.model.js');
