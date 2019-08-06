const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const db = mongoose.connection;
const cookieSession = require("cookie-session");
const passport = require("passport");
const request = require("request")
require('dotenv').config()

app.get("/api/tumblr"), (req, res) => {
    request("http://api.tumblr.com/v2/blog/catasters.tumblr.com/posts/photo?api_key=" + process.env.TUMBLR_API_KEY, { json: true }, (err, response, body) => {
    if (err) {
      throw err;
    }
    
    res.json(body);
  })
}

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Set up cookies session
app.use(cookieSession({
  maxAge: 24*60*60*1000, /* Maximum 1 day until need to login again */
  keys: [process.env.COOKIE_KEY]
}));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session()); /* Sets up app to use the cookie session */


// Connect to the Mongo DB
mongoose.set("useCreateIndex", true); /* removes Mongodb deprecation warning */
mongoose.set('useFindAndModify', false); /* removes Mongodb deprecation warning */
if (process.env.NODE_ENV === "production") {
  mongoose.connect(process.env.MONGODB_URI || "mongodb://project6:stem1234@ds253017.mlab.com:53017/heroku_7w4p3xnt", { useNewUrlParser: true, autoIndex: false });
} else {
  mongoose.connect("mongodb://localhost/stemdb", { useNewUrlParser: true/* , autoIndex: false  */});
}

db.on("error", err => console.log(err));

db.once("open", () => {
  console.log(`Connected to Mongodb`);
})

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
