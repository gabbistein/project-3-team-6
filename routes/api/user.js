const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create)

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findUser)
  .put(userController.addContact)
  
router
  .route("/:userId/:contactId")
  .delete(userController.remove)

module.exports = router;
