module.exports = (app) => {
    const comments = require("../controllers/comment.controller.js");
    var router = require("express").Router();
  
    // Create a new Comments
    router.post("/:ticketId/comments", comments.create);

    // Create a new Comments
    router.get("/:ticketId/comments", comments.findAll);

    // Create a new Comments
    router.get("/:ticketId/comments/:commentId", comments.findOne);    

    app.use('/api/tickets', router);

};