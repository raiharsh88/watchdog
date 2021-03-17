const router = require("express").Router();
const { Cam } = require("../schema/cam");

router.get("/add-cam", async (req, res) => {
  const { camId, meta } = req.body;

  const exists = await Cam.findOne({ camId });

  //   if (exists) {
  //     return res
  //       .status(409)
  //       .json({ msg: `Camera with id ${camId} is already registered` });
  //   }
});

module.exports = router;
