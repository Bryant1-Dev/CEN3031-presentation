const express = require("express");
const { ensureAuthenticated } = require("../config/auth");
const router = express.Router();

//Welcome Page
router.get("/", (req, res) => {
  //res.render("welcome");
});
//Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  /* res.render("dashboard", {
    user: req.user
  }); */
  res.send(req.user);
});

module.exports = router;
