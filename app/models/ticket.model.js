module.exports = (sequelize, Sequelize) => {
    const Ticket = sequelize.define("tickets", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Ticket;
  };