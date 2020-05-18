module.exports = (app) => {
    const tickets = require("../controllers/ticket.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Ticket
    router.post("/", tickets.create);
  
    // Retrieve all tickets
    router.get("/", tickets.findAll);
  
    // Retrieve all published tickets
    router.get("/published", tickets.findAllPublished);
  
    // Retrieve a single Ticket with id
    router.get("/:id", tickets.findOne);
  
    // Update a Ticket with id
    router.put("/:id", tickets.update);
  
    // Delete a Ticket with id
    router.delete("/:id", tickets.delete);
  
    // Create a new Ticket
    //router.delete("/", tickets.deleteAll);
  
    app.use('/api/tickets', router);
  };


  console.log('ticket.routes.js');