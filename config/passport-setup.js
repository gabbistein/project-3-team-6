const passport = require("passport");
const User = require("../models")
const keys = require("./keys")
const TumblrStrategy = require("passport-tumblr").Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    })
});

passport.use(new TumblrStrategy({
    consumerKey: keys.tumblrAuthConsumerKey,
    consumerSecret: keys.tumblrAuthSecret,
    callbackURL: "http://localhost:3000/auth/tumblr/callback"
},
    (token, tokenSecret, profile, done) => {
        User.findOrCreate({ tumblrId: profile.id }, function (err, user) {
            return done(err, user);
        });
        console.log("connected to tumblr");
        
    }
));