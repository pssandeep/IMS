module.exports = (app) => {
    const tickets = require("../controllers/ticket.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tickets.create);
  
    // Retrieve all tickets
    router.get("/", tickets.findAll);
  
    // Retrieve all published tickets
    router.get("/published", tickets.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tickets.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tickets.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tickets.delete);
  
    // Create a new Tutorial
    router.delete("/", tickets.deleteAll);
  
    app.use('/api/tickets', router);
  };


  console.log('ticket.routes.js');