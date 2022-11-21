const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();

//setup handlebars engine and views location and partials
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

//alter default paths
app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Igor",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Fawkes",
    message: "Please reed the FAQs before opening a new topic",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    name: "Igor",
    title: "About me",
  });
});
app.get("/weather", (req, res) => {
  res.send({
    name: "Andrew",
    age: 27,
  });
});

app.get("*", (req, res) => {
  res.send("404 Page");
});

//app.com
//app.com/help
//app.com/about

app.listen(3001, () => {
  console.log("Server is up on port 3001.");
});
