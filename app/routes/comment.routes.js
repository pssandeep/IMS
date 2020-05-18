module.exports = (app) => {
  const comments = require("../controllers/comment.controller.js");
  var router = require("express").Router();

  //Check if the Ticket exists.
  router.use("/:ticketId/comments/*", comments.doesTicketExits);

  // Create a new Comments
  router.post("/:ticketId/comments", comments.create);

  // Create a new Comments
  router.get("/:ticketId/comments", comments.findAll);

  // Create a new Comments
  router.get("/:ticketId/comments/:commentId", comments.findOne);

  // Update a Comments with id
  router.put("/:ticketId/comments/:commentId", comments.update);

  // Delete a Comments with id
  router.delete("/:ticketId/comments/:commentId", comments.delete);

  // Delete all Comments under a ticket -
  router.delete("/:ticketId/comments/", comments.delete);

  app.use("/api/tickets", router);
};
