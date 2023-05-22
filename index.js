const express = require("express");
const app = express();
const api = require("./routes");
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
