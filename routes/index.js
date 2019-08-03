const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require("passport");

// API Routes
router.use("/api", apiRoutes);

router.get("/auth/tumblr",
  passport.authenticate("tumblr"));

router.get("/auth/tumblr/callback", 
  passport.authenticate("tumblr", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
    
  });

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
