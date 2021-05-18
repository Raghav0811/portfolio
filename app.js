const express = require("express");
const app = express();
const PORT = 8080;

app.engine(".html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
