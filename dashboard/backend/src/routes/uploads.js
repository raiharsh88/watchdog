const router = require("express").Router();
const { Image } = require("../schema/image");

const path = require("path");

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

const upload = multer({ dest: uploadsDir, storage: storage });

function updateDB(req) {
  return new Promise(async (res, rej) => {
    console.log("Body is", JSON.parse(JSON.stringify(req.body)));

    if (!req.body) {
      return rej("Error in promise");
    }
    if (!req.body) {
      return res("Promise Successfull");
    }
  });
}

router.post("/", upload.single("file"), (req, res) => {
  if (!req.file) {
    console.log("No file received", req.body);
    return res.send({
      success: false,
    });
  } else {
    console.log("file received");

    updateDB(req)
      .then((msg) => {
        console.log(msg);
      })
      .catch((err) => {
        console.log(err);
      });

    return res.send({
      success: true,

      url: "http://172.105.63.46:5000/uploads/" + req.file.filename,
    });
  }
});

router.post("/test-json", (req, res) => {
  res.send("OK");
  console.log(req.body);
});
module.exports = router;
