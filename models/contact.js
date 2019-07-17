const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: { type: String, required: true },
  facebookImage: { type: String, required: true },
  twitterUrl: String,
  instagramUrl: String,
  linkedInUrl: String,
  facebookUrl: String
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
