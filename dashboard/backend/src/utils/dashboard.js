const { Image } = require("../schema/image");

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

// CreateSample();

// console.log(Date().toString());

module.exports = router;
