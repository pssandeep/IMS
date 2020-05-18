module.exports = (sequelize, Sequelize) => {
    const Ticket = sequelize.define("tickets", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      priority:{
        type: Sequelize.STRING
      },
      severity:{
        type: Sequelize.STRING
      },
      client:{
        type: Sequelize.STRING
      },
      status:{
        type: Sequelize.STRING
      },
      label:{
        type: Sequelize.STRING
      },
    });

    Ticket.associate = models => {
      Ticket.hasMany(models.Comment, { onDelete: 'CASCADE', hooks : "true" });
    };
  
    return Ticket;
  };

  console.log('ticket.model.js');