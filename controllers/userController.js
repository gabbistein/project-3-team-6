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
      .findOne({googleId: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  create: function (req, res) {
    db.User.findOne({ googleId: req.body.googleId }).then((currentUser) => {
      if (currentUser) {
        // already have the user
        console.log("User is: ", currentUser.firstName + " " + currentUser.lastName);
        // done(null, currentUser);
      } else {
        // if not, create user in db
        db.User.create(req.body).then((newUser) => {
          console.log("new user created: " + newUser);
          // done(null, newUser);
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
        { $push: { contacts: req.body } }
      )
      .catch(err => console.log(err));
  },
  // remove contact from list
  remove: function (req, res) {
    db.User
      .updateOne({ google: { googleId: req.params.id } }, { $pull: { contacts: { _id: req.params.id } } }) /* need to index each User contact in model and replace contactId with index */
      .then(dbModel => dbModel.remove())
      .catch(err => res.status(422).json(err));
  }
};