const { Image } = require("../schema/image");
const { Cam } = require("../schema/cam");

const router = require("express").Router();

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

module.exports = router;
