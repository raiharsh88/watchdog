const router = require("express").Router();
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const passport = require("passport");
const path = require("path");
const validator = require("validator");
const { User } = require("../schema/users");

function checkAuth(req, res, next) {
  if (!req.user) return res.status(401).json({ err: "UNAUTHORIZED" });
  next();
}

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

router.get("/check-auth", async (req, res) => {
  if (!req.user) return res.status(403).json({ err: "UNAUTHORIZED" });

  console.log("This user is authneticated");

  res.status(200).json({ msg: "AUTHENTICATED" });
});

router.post("/add-user", checkAuth, async (req, res) => {
  const { email, password, role, password2 } = req.body;

  console.log(req.body);

  if (req.user.role !== "admin")
    return res
      .status(403)
      .json({ msg: "You need admin privilege for this operation" });

  if (!validator.isEmail(email))
    return res.status(400).json({ err: "Invalid email!" });
  else if (!password)
    return res.status(400).json({ err: "Password cannot be empty!" });
  else if (!password2)
    return res.status(400).json({ err: "Password cannot be empty!" });
  else if (password.length < 8)
    return res.status(400).json({ err: "Password too short!" });
  else if (password.length > 16)
    return res
      .status(400)
      .json({ err: "Password should be between 8 to 16 characters long" });
  else if (password !== password2)
    return res.status(400).json({ err: "Pasword did not match" });

  const oldUser = await User.findOne({ email });

  if (oldUser) return res.status(409).json({ msg: "User already exists!" });

  const hash = bcrypt.hashSync(password, 10);
  const newUser = new User({
    email,
    password: hash,
    since: Date.now(),
    role,
    parent: req.user.email,
    subs: [],
    lastSeen: Date.now(),
  });

  let oldSubs = req.user.subs.filter((e) => e !== email);

  await User.findOneAndUpdate(
    { email: req.user.email },
    { subs: [...oldSubs, email] }
  );

  newUser
    .save()
    .then((user) => {
      console.log(user);

      res.json({ msg: "User addedd successfully" });
    })
    .catch((err) => {
      res.status(500).json({ err: "SERVER_INTERNAL_ERROR" });
    });
});

router.get("/remove-user", async (req, res) => {
  const delUser = req.query.email;

  const checkExists = await User.findOne({ email: delUser });

  if (!checkExists) return res.status(400).json({ err: "Invalid request!" });

  if (req.user.role !== "admin")
    return res.status(403).json({ err: "You are not authorized!" });

  await User.findOneAndDelete({ email: delUser });

  const subs = req.user.subs.filter((e) => e !== delUser);

  User.findOneAndUpdate({ email: req.user.email }, { subs: subs })
    .then((doc) => {
      res.json({ msg: "User removed successfully!" });
    })
    .catch((err) => {
      res.status(500).json({ err: "SERVER_INTERNAL_ERROR" });
    });
});
module.exports = router;
