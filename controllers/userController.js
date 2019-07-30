const db = require("../models");

// Defining methods for the UserController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ google: { googleId: req.params.id } }, req.body)
      .catch(err => res.status(422).json(err));
  },
  // remove contact from list
  remove: function (req, res) {
    db.User
      .updateOne({ google: { googleId: req.params.id } }, { $pull: { contacts: { _id: req.params.id } } }) /* need to index each User contact in model and replace contactId with index */
      .then(dbModel => dbModel.remove())
      .catch(err => res.status(422).json(err));
  }
};