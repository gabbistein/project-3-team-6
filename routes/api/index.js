const router = require("express").Router();
const contactRoutes = require("./contacts");

// Book routes
router.use("/contacts", contactRoutes);

module.exports = router;
