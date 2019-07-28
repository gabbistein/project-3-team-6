const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
  firstName: { type: String, unique: false },
  lastName: { type: String, unique: false },
  local: {
    username: { type: String, unique: false, required: false },
    password: { type: String, unique: false, required: false }
  },
  google: {
    googleId: { type: String, unique: true, required: false }
  },
  photos: [],
  userSocialMedia: {
    instagram: {
      handle: { type: String, unique: true },
      link: { type: String, unique: true }
    },
    twitter: {
      handle: { type: String, unique: true },
      link: { type: String, unique: true }
    },
    facebook: {
      handle: { type: String, unique: true },
      link: { type: String, unique: true }
    },
    linkedIn: {
      handle: { type: String, unique: true },
      link: { type: String, unique: true }
    },
    youtube: {
      handle: { type: String, unique: true },
      link: { type: String, unique: true }
    },
    reddit: {
      handle: { type: String, unique: true },
      link: { type: String, unique: true }
    },
    tumblr: {
      handle: { type: String, unique: true },
      link: { type: String, unique: true }
    },
    pinterest: {
      handle: { type: String, unique: true },
      link: { type: String, unique: true }
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
          handle: { type: String, unique: true },
          link: { type: String, unique: true }
        },
        twitter: {
          handle: { type: String, unique: true },
          link: { type: String, unique: true }
        },
        facebook: {
          handle: { type: String, unique: true },
          link: { type: String, unique: true }
        },
        linkedIn: {
          handle: { type: String, unique: true },
          link: { type: String, unique: true }
        },
        youtube: {
          handle: { type: String, unique: true },
          link: { type: String, unique: true }
        },
        reddit: {
          handle: { type: String, unique: true },
          link: { type: String, unique: true }
        },
        tumblr: {
          handle: { type: String, unique: true },
          link: { type: String, unique: true }
        },
        pinterest: {
          handle: { type: String, unique: true },
          link: { type: String, unique: true }
        }
      }
    }
  ]
});

// // Define schema methods
// userSchema.methods = {
//   checkPassword: function(inputPassword) {
//     return bcrypt.compareSync(inputPassword, this.local.password);
//   },
//   hashPassword: plainTextPassword => {
//     return bcrypt.hashSync(plainTextPassword, 10);
//   }
// };

// // Define hooks for pre-saving
// userSchema.pre("save", function(next) {
//   if (!this.local.password) {
//     console.log("=======NO PASSWORD PROVIDED=======");
//     next();
//   } else {
//     this.local.password = this.hashPassword(this.local.password);
//     next();
//   }
//   // this.password = this.hashPassword(this.password)
//   // next()
// });

// Create reference to User & export
const User = mongoose.model("User", userSchema);
module.exports = User;
