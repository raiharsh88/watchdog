const { User, Temporary } = require("../schema/users");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const initialize = function (passport) {
  const emailAuth = async function (email, password, done) {
    var user = await User.findOne({ email });

    if (!user) {
      user = await Temporary.findOne({ email });
      if (user)
        return done(null, false, {
          url: "/register",
          err: "account verification pending",
        });
    }

    if (!user) return done(null, false, { msg: "user not found" });

    try {
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { msg: "password or email is incorrect" });
      }
      return done(null, user, { msg: "user logging in" });
    } catch (e) {
      console.log("password compare failed", e);
      return done(null, false, { msg: "SERVER_INTERNAL_ERROR" });
    }
  };

  passport.use(
    "local-email",
    new localStrategy({ usernameField: "email" }, emailAuth)
  );

  passport.serializeUser((user, done) => {
    console.log(user);
    if (!user) {
      console.log("Unable to serialize user");
      return done(null, false, { msg: "user not found" });
    }

    return done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    return User.findById(id, (err, user) => {
      if (err) return done(null, false);

      done(err, user);
    });
  });
};

module.exports = { initialize };
