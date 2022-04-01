const express = require("express");
const { dirname } = require("path");
const app = express();
const path = require("path");
const port = 5500;

const publicFolderPath = path.resolve(__dirname, "./public");
app.use(express.static(publicFolderPath));

app.listen(process.env.PORT || 5500, function () {
  console.log("servidor corriendo en el puerto: 5500");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/signup.html"));
});
