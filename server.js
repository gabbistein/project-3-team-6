require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
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

// Connect to the Mongo DB
mongoose.set("useCreateIndex", true); /* removes Mongodb deprecation warning */
if (process.env.NODE_ENV === "production") {
  mongoose.connect(process.env.MONGODB_URI || "mongodb://project6:stem1234@ds253017.mlab.com:53017/heroku_7w4p3xnt", { autoIndex: false }, { useNewUrlParser: true });
} else {
  mongoose.connect("mongodb://localhost/stemdb", { autoIndex: false }, { useNewUrlParser: true });
}

db.on("error", err => console.log(err));

db.once("open", () => {
  console.log(`Connected to Mongodb`);
})

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
