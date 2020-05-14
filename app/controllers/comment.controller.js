console.log('comment.controller.js');

const db = require("../models");
const Comments = db.comments;
const Op = db.Sequelize.Op;

// Create and Save a new Ticket
exports.create = (req, res) => {

  console.log('INCOMING REQUEST - Comments');
  console.log(req.body);
  console.log(req.params);
  // Validate request
  if (!req.body.comment) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Comments
  const comments = {    
      ticketId: req.params.ticketId,
      comment: req.body.comment,
      edited: req.body.edited ? req.body.edited : false,
      author: req.body.author,
  };

  // Save Ticket in the database
  Comments.create(comments)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Ticket."
      });
    });
    
};


// Retrieve all Comments from the database.
exports.findAll = (req, res) => {
    const ticketId = parseInt(req.params.ticketId);
  var condition = ticketId ? { ticketId: { [Op.eq]: `${ticketId}` } } : null;

  Comments.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tickets."
      });
    });
};