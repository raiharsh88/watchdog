const express = require("express");
const path = require("path");
const app = express();

const port = process.env.port || 5000;
const path_to_static = path.join(__dirname, "../", "public");
//Routers
const uploadRouter = require("./routes/uploads");
app.use(express.static(path_to_static));

app.use("/upload", uploadRouter);


app.get("/test", async (req, res) => {
  res.json("Serve is online");
});

app.get("/", async (req, res) => {
  res.json({ msg: "Serve is online" });
});
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
