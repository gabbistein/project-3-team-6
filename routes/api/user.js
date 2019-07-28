const router = require("express").Router();
const contactController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(contactController.findAll)
  .post(contactController.create);

// Matches with "/api/contacts/:id"
router
  .route("/:id")
  .get(contactController.findById)
  .put(contactController.update)
  .delete(contactController.remove);

module.exports = router;
