const router = require("express").Router();
const { imageModel } = require("../schema/image");

router.get("/test", async (req, res) => {
  res.send("Server online");
});

module.exports = router;
