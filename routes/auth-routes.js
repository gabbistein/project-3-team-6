const router = require("express").Router();

router.get("/logout", (req, res) => {
    res.send("Logging out")
})

router.get("/google", (req, res) => {
    res.send("Logging in with Google")
})

module.exports = router