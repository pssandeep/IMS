console.log("comment.controller.js");

const db = require("../models");
const Comments = db.comments;
const Op = db.Sequelize.Op;

// Create and Save a new Ticket
exports.create = (req, res) => {
  // Validate request
  if (!req.body.comment) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Comments Object
  const comments = {
    ticketId: req.params.ticketId,
    comment: req.body.comment,
    edited: req.body.edited ? req.body.edited : false,
    author: req.body.author,
  };

  // Save Comments in the database
  Comments.create(comments)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Ticket.",
      });
    });
};

// Retrieve all Comments for a ticket from the database.
exports.findAll = (req, res) => {
  const ticketId = parseInt(req.params.ticketId);
  var condition = ticketId ? { ticketId: { [Op.eq]: `${ticketId}` } } : null;

  Comments.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tickets.",
      });
    });
};

// Find a single Comment with an id
exports.findOne = (req, res) => {
  const commentId = req.params.commentId;
  Comments.findByPk(commentId)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Ticket with id=" + id,
      });
    });
};

// Delete a Comment with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.commentId;
  const ticketId = req.params.ticketId;

  let delCondition;
  if(id){
    delCondition = {where: { id: id, ticketId : ticketId },}
  }else {
    delCondition = {where: { ticketId : ticketId },}
  }
  console.log(delCondition);

  Comments.destroy(delCondition)
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Comment was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Comment with id=${id} under Ticket id=${ticketId} . Maybe Comment was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Comment with id=" + id,
      });
    });
};
