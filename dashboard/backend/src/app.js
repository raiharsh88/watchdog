const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const session = require("express-session");
const mongoStore = require("connect-mongo")(session);
const passport = require("passport");
const { User } = require("./schema/users");

const app = express();

// require("./config/passport").initialize(passport);

const { mongoURI } = require("../../config");

const port = process.env.port || 5000;
const path_to_static = path.join(__dirname, "../", "public");

//Routers
const uploadRouter = require("./routes/uploads");
const apiRouter = require("./utils/dashboard");
const registerRouter = require("./routes/register");
const authRouter = require("./routes/auth");

const origins = [
  "http://172.105.63.46:5000",
  "http://172.105.63.46:3000",
  "http://localhost:3000",
];
app.use(function (req, res, next) {
  let ogn = req.headers.origin;

  if (origins.indexOf(ogn) === -1) {
    ogn = origins[0];
  }

  res.setHeader("Access-Control-Allow-Origin", ogn);

  res.setHeader("Access-Control-Allow-Credentials", "true");

  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );

  next();
});

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conected to database");
  });

const connection = mongoose.connection;

require("./config/passport").initialize(passport);

const sessionStorage = new mongoStore({
  mongooseConnection: connection,
  collection: "sessions",
});

const sessionConf = {
  saveUninitialized: false,
  resave: true,
  secret: "dbjvspcthdyfvjwiAir7hbdvcwl0wbey",
  store: sessionStorage,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    sameSite: true,
    secure: false,
    httpOnly: true,
  },
};

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConf));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path_to_static));

app.use("/", async (req, res, next) => {
  if (req.user) {
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { lastSeen: Date.now() }
    );
  }
  next();
});
app.use("/auth", authRouter);

app.use("/upload", uploadRouter);
app.use("/register", registerRouter);
app.use("/api", apiRouter);

app.get("/test", async (req, res) => {
  res.json("Serve is online");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
