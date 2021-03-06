const { Image } = require("../schema/image");
const { Cam } = require("../schema/cam");
const { User } = require("../schema/users");
const bcrypt = require("bcrypt");

const router = require("express").Router();

function checkAuth(req, res, next) {
  if (!req.user) return res.status(401).json({ err: "UNAUTHORIZED" });

  next();
}
//AIzaSyDdyrjGEE5b4hhoJou4d8l1R1CdXR3twDM
const CreateSample = async function () {
  let data = {
    time: Date.now(),
    camId: "CAM1",

    imgId: Date.now(),
    name: "automotive.png",
    meta: {
      location:
        "https://www.google.com/maps/embed/v1/place?key=AIzaSyDdyrjGEE5b4hhoJou4d8l1R1CdXR3twDM&q=Space+Needle,Seattle+WA",
      properties: {
        description: "Two people spotted near Kanheri Caves",
      },
    },
  };

  let img = new Image(data);

  img.save((err, data) => {
    console.log(err, data);
  });
};

router.get("/sample", async (req, res) => {
  let doc = await Image.find();

  res.json({ data: doc });
});

// async function addProp() {
//   const images = await Image.find();

//   for (let img of images) {
//     console.log(img);
//   }
// }

// addProp();
// CreateSample();

// console.log(Date().toString());

router.get("/image-details", async (req, res) => {
  const { imgId } = req.query;

  const image = await Image.findOne({ imgId });

  // console.log(req.session);

  if (!image) return res.status(404).json({ err: "Image not found!" });

  res.json(image);
});

router.get("/list-cameras", async (req, res) => {
  if (!req.user) return res.status(401).json({ err: "UNAUTHORIZED" });
  var cams = null;

  if (req.user.role == "admin") {
    cams = await Cam.find({ email: req.user.email });
  } else cams = await Cam.find({ email: req.user.parent });

  // for (let cam of cams) {
  //   let newUpdate = await Cam.findOneAndUpdate(
  //     { camId: cam.camId },
  //     { lastSeen: Date.now() },
  //     { new: true }
  //   );

  //   console.log(newUpdate);
  // }

  res.json({ data: cams });

  // res.json({});
});

router.get("/add-camera", async (req, res) => {
  if (!req.user) return res.status(401).json({ err: "UNAUTHORIZED" });

  let oldCam = await Cam.findOne({ camId: req.query.camId });

  // console.log("No old Cams", oldCam);

  // return res.status(200).json({ msg: "Camera already added" });

  if (oldCam) return res.status(409).json({ err: "Camera already added" });
  const newCam = new Cam({
    camId: req.query.camId,
    time: Date.now(),
    lastSeen: Date.now(),
    email: req.user.email,
    meta: {
      location: {
        lat: "19?? 12' 24.408'' N",
        lon: "72?? 54' 18.0756'' E",
        text: "Kanheri Caves, Sanjay Gandhi National Park",
      },
    },
  });

  const camExp = /^cam_[0-9]{4}$/;

  if (!camExp.test(req.query.camId))
    return res.status(409).json({ err: "Invalid cam ID" });

  newCam
    .save()
    .then((doc) => {
      res.json({ msg: "Device added successfully!" });
    })
    .catch((err) => {
      console.log("Unable to add cam", err);

      res.status(500).json({ err: "SERVER_INTERNL_ERROR" });
    });
});

router.get("/load-dashboard", checkAuth, async (req, res) => {
  const { id, email } = req.user;

  const limit = 30;
  var images = await Image.find({ email: email })
    .limit(limit)
    .sort({ _id: -1 });

  if (req.user.role !== "admin") {
    images = await Image.find({ email: req.user.parent })
      .sort({ _id: -1 })
      .limit(limit);
  }

  res.json({ data: images });
});

var i = 1;

router.get("/latest", async (req, res) => {
  const imgId = req.query.imgId;
  console.log(req.query);
  const image = (await Image.find({}).sort({ _id: -1 }).limit(1))[0];
  // console.log("ImgId", imgId, image.imgId);

  if (image) {
    if (image.imgId == imgId) {
      return res.status(404).json({ err: "No updates" });
    } else if (image.imgId !== imgId) {
      res.status(200).json({ msg: "New updates available" });
    }
  }

  // res.json({ data: images });
});

router.get("/load-employees", checkAuth, async (req, res) => {
  const user = req.user;
  let employees = [];

  for await (let email of user.subs) {
    let emp = await User.findOne({ email }, "email since lastSeen");

    if (emp) employees.push(emp);
  }
  res.json({ data: employees });
});
// const createUser = async function () {
//   const salt = bcrypt.genSaltSync(10);
//   const hash = bcrypt.hashSync("password", salt);

//   const user = new User({
//     email: "email@gmail.com",
//     password: hash,
//     phone: "1203049990",
//     since: Date.now(),
//   });

//   await user.save();
// };

// createUser();

module.exports = router;
