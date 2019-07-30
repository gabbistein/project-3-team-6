const router = require("express").Router();
const userRoutes = require("./user");

// API routes
router.use("/users", userRoutes);

module.exports = router;
