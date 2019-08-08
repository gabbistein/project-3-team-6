const db = require("../models");

// Defining methods for the UserController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  findUser: function (req, res) {
    db.User
      .findOne({ googleId: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  create: function (req, res) {
    db.User.findOne({ googleId: req.body.googleId }).then((currentUser) => {
      if (currentUser) {
        // already have the user
        console.log("User is: ", currentUser.firstName + " " + currentUser.lastName);
      } else {
        // if not, create user in db
        db.User.create(req.body).then((newUser) => {
          console.log("new user created: " + newUser);
        })
      }
    })
      .catch(err => console.log(err));
    // .catch(err => res.status(422).json(err));
  },
  addContact: function (req, res) {
    db.User
      .findOneAndUpdate(
        { googleId: req.params.id },
        { $push: { contacts: req.body } },
        { upsert: true }
      ).then(dbModel => { res.json(dbModel) })
      .catch(err => console.log(err));
  },
  updateContact: function (req, res) {
    db.User
      .findOneAndUpdate(
        { googleId: req.params.id },
        // { contacts:  },
        { upsert: true }
      )
      .catch(err => console.log(err));
  },
  remove: function (req, res) {
    db.User
      .findOneAndUpdate(
        { googleId: req.params.userId },
        { $pull: { contacts: { _id: req.params.contactId } } },
        { new: true }
      )
      .catch(err => console.log(err));
  }
};