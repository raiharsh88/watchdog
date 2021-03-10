const router = require("express").Router();
const mongoose = require("mongoose");

router.get("/test", async (req, res) => {
  res.send("Server online");
});

module.exports = router;
