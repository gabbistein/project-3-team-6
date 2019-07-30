require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const graph = require('fbgraph');
const db = mongoose.connection;
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



app.get('/auth', function (req, res) {
  // we don't have a code yet
  // so we'll redirect to the oauth dialog
  if (!req.query.code) {
    console.log("Performing oauth for some user right now.");

    var authUrl = graph.getOauthUrl({
      "client_id": conf.client_id,
      "redirect_uri": conf.redirect_uri,
      "scope": conf.scope
    });

    if (!req.query.error) { //checks whether a user denied the app facebook login/permissions
      res.redirect(authUrl);
    } else {  //req.query.error == 'access_denied'
      res.send('access denied');
    }
  }
  // If this branch executes user is already being redirected back with 
  // code (whatever that is)
  else {
    console.log("Oauth successful, the code (whatever it is) is: ", req.query.code);
    // code is set
    // we'll send that and get the access token
    graph.authorize({
      "client_id": conf.client_id
      , "redirect_uri": conf.redirect_uri
      , "client_secret": conf.client_secret
      , "code": req.query.code
    }, function (err, facebookRes) {
      res.redirect('/UserHasLoggedIn');
    });
  }
});

graph.get('likes', { limit: 2, access_token: "foobar" }, function (err, res) {
  if (res.paging && res.paging.next) {
    graph.get(res.paging.next, function (err, res) {
      // page 2
      console.log(res);

    });
  }
});

var params = { fields: "picture" };

graph.get("", params, function (err, res) {
  console.log(res); // { picture: "http://profile.ak.fbcdn.net/..." }
});

app.get('/UserHasLoggedIn', function (req, res) {
  res.render("index", {
    title: "Logged In"
  });
});

// Connect to the Mongo DB
mongoose.set("useCreateIndex", true); /* removes Mongodb deprecation warning */
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
