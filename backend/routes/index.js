const express = require("express");
const router = express.Router();

//Welcome Page
router.get("/", (req, res) => {
  //res.render("welcome");
});
//Dashboard
router.get("/dashboard", (req, res) => {
  if (req.isAuthenticated()) return res.send(req.user);
  else {
    res.send({
      success: false,
      message: "You are not authenticated."
    });
  }
});

module.exports = router;
