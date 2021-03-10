const express = require("express");

const app = express();

const port = process.env.port || 3000;

//Routers
const uploadRouter = require("./routes/uploads");
app.use("/upload", uploadRouter);

app.get("/test", async (req, res) => {
  res.json("Serve is online");
});
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
