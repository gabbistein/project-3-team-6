const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const timestamps = require("mongoose-timestamp");

// Define userSchema
const userSchema = new Schema({
  firstName: { type: String, unique: false },
  lastName: { type: String, unique: false },
  google: {
    googleId: { type: String, unique: true, required: true }
  },
  photos: [],
  userSocialMedia: {
    instagram: {
      handle: { type: String, unique: false, trim: true, required: false },
      link: { type: String, unique: false, trim: true, required: false }
    },
    twitter: {
      handle: { type: String, unique: false, trim: true, required: false },
      link: { type: String, unique: false, trim: true, required: false }
    },
    facebook: {
      handle: { type: String, unique: false, trim: true, required: false },
      link: { type: String, unique: false, trim: true, required: false }
    },
    linkedIn: {
      handle: { type: String, unique: false, trim: true, required: false },
      link: { type: String, unique: false, trim: true, required: false }
    }
  },
  contacts: [
    {
      firstName: { type: String, unique: true },
      lastName: { type: String, unique: true },
      phoneNumber: { type: String, required: false },
      email: { type: String, required: false },
      birthdate: { type: Date, required: false },
      notes: { body: String, required: false },
      photos: [{ type: String, required: false }],
      socialMedia: {
        instagram: {
          handle: { type: String, unique: false, trim: true, required: false  },
          link: { type: String, unique: false, trim: true, required: false  }
        },
        twitter: {
          handle: { type: String, unique: false, trim: true, required: false  },
          link: { type: String, unique: false, trim: true, required: false  }
        },
        facebook: {
          handle: { type: String, unique: false, trim: true, required: false  },
          link: { type: String, unique: false, trim: true, required: false  }
        },
        linkedIn: {
          handle: { type: String, unique: false, trim: true, required: false  },
          link: { type: String, unique: false, trim: true, required: false  }
        }
      }
    }
  ]
});

userSchema.plugin(timestamps);

// Create reference to User & export
const User = mongoose.model("User", userSchema);
module.exports = User;
