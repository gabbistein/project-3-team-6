const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamps = require("mongoose-timestamp");

// Define userSchema
const userSchema = new Schema({
  firstName: { type: String, unique: false },
  lastName: { type: String, unique: false },
  googleId: { type: String, unique: true, required: true },
  photos: [],
  userSocialMedia: {
    twitter: {
      handle: { type: String, unique: false, trim: true, required: false },
      link: { type: String, unique: false, trim: true, required: false }
    },
    tumblr: {
      handle: { type: String, unique: false, trim: true, required: false },
      link: { type: String, unique: false, trim: true, required: false }
    },
    pinterest: {
      handle: { type: String, unique: false, trim: true, required: false },
      link: { type: String, unique: false, trim: true, required: false }
    }
  },
  contacts: [
    {
      firstName: { type: String, unique: false },
      lastName: { type: String, unique: false },
      phoneNumber: { type: String, required: false },
      email: { type: String, required: false },
      birthdate: { type: Date, required: false },
      notes: { body: String, required: false },
      photos: [{ type: String, required: false }],
      socialMedia: {
        twitter: {
          handle: { type: String, unique: false, trim: true, required: false },
          link: { type: String, unique: false, trim: true, required: false }
        },
        tumblr: {
          handle: { type: String, unique: false, trim: true, required: false },
          link: { type: String, unique: false, trim: true, required: false }
        },
        pinterest: {
          handle: { type: String, unique: false, trim: true, required: false },
          link: { type: String, unique: false, trim: true, required: false }
        }
      }
    }
  ]
});

userSchema.plugin(timestamps);
userSchema.index({ contacts: 1 }) /* Used for search optimization */

// Create reference to User & export
const User = mongoose.model("User", userSchema);
module.exports = User;
