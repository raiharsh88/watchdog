const router = require("express").Router();
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const passport = require("passport");
const path = require("path");

router.post("/login", (req, res, next) => {
  // return res.json(null);
  console.log("Req body", req.body);
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ err: "email and password cannot be empty" });

  passport.authenticate("local-email", async (err, user, info) => {
    if (err) {
      return res.json({ err: "password did not match" });
    }

    if (user) {
      req.logIn(user, (err) => {
        if (err) return res.status(500).json({ err: "SERVER_INTERNAL_ERROR" });
        console.log("User is", user);

        res.status(301).json({ url: "/home" });
      });
    } else if (!user) {
      res
        .status(401)
        .json({ err: "username or password is incorrect", url: "/login" });
    }
  })(req, res, next);
});

async function validateReg(req, res, next) {}
router.get("/register", validateReg, async (req, res, next) => {});
router.get("/logout", (req, res) => {
  req.logOut();
  res.status(301).json({ msg: "logged out" });
});

module.exports = router;
