const router = require("express").Router();
const { Image } = require("../schema/image");
const { Cam } = require("../schema/cam");
const { nanoid } = require("nanoid");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, callback) {
    console.log("file", file);
    callback(null, Date.now() + "_" + file.originalname);
  },
});

const uploadsDir = path.join(__dirname, "../../public/uploads");

console.log(uploadsDir);
router.get("/test", async (req, res) => {
  res.send("Server online");
});

// router.post('/upload', upload.single('photo'), (req, res) => {
//   if(req.file) {
//       res.json({msg:'file received'});
//   }
//   else throw 'error';
// });

const upload = multer({ dest: uploadsDir, storage: storage });

async function updateDB(req, res, next) {
  if (!req.body) {
    return rej("NO DATA FOUND WITH IMAGE");
  }

  //Getting the owner of the cam

  const data = JSON.parse(JSON.stringify(req.body));

  const { camId } = data;

  const camRecord = await Cam.findOneAndUpdate(
    { camId },
    { lastSeen: Date.now() }
  );

  const { email } = camRecord;

  console.log("Data is", data);
  const newImage = new Image({
    time: Date.now(),
    camId: data.camId,
    email,
    imgId: camId + "_" + (await nanoid(10)),
    url: "http://172.105.63.46:5000/uploads/" + req.file.filename,
    meta: {
      ...data,
    },
  });

  await newImage
    .save()
    .then((doc) => {
      // console.log("Image Saved", doc);

      return res.json({
        success: true,
        url: "http://172.105.63.46:5000/uploads/" + req.file.filename,
      });
    })
    .catch((err) => {
      res.status(500).json({ err: "SERVER_INTERNAL_ERROR" });

      console.log("Failed to save image", err);
    });
}

router.post("/", upload.single("file"), (req, res, next) => {
  if (!req.file) {
    // console.log("No file received", req.body);
    return res.send({
      success: false,
    });
  } else {
    console.log("file received");

    updateDB(req, res, next);
  }
});

router.post("/test-json", (req, res) => {
  res.send("OK");
  console.log(req.body);
});
module.exports = router;
