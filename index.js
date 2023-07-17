const express = require("express");
const app = express();
const { Liquid } = require("liquidjs");

let engine = new Liquid();
app.engine("liquid", engine.express());
app.set("views", "./views");
app.set("view engine", "liquid");

app.get("/", (req, res) => {
  res.render("welcome", { key: "/" });
});
app.get("/:id", (req, res) => {
  res.render("welcome", { key: req.params.id });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
