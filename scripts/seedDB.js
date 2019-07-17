const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/contactlist"
);

const contactSeed = [
  {
    name: "Brandon Lublin",
    facebookImage: "https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/19055633_1612785702117771_3636756971941260554_o.jpg?_nc_cat=111&_nc_oc=AQlgsHIpK4DasWFBdtMUn_ipuflBGeGyNwp7LkhPTzyWv9bpzZcOhaliHzRu3jIXWW8&_nc_ht=scontent-sea1-1.xx&oh=c2604eb679b56157f00d2d4d2052ca05&oe=5DED04DA",
    twitterUrl: "https://twitter.com/BrandonLublin",
    instagramUrl: "https://www.instagram.com/b_lub/",
    linkedInUrl: "https://www.linkedin.com/in/brandon-lublin-78a550a8/",
    facebookUrl: "https://www.facebook.com/brandon.lublin?ref=bookmarks"
  }
];

db.Contact
  .remove({})
  .then(() => db.Contact.collection.insertMany(contactSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
