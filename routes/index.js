const express = require("express");
const router = express.Router();

let messages = [
  {
    user: "Rishika",
    message: "Hello!",
    time: new Date(),
  },
  {
    user: "Anuradha",
    message: "Hey",
    time: new Date(),
  },
  {
    user: "Jyoti",
    message: "What?",
    time: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "A PERSONAL QUEST ", messages: messages });
});

router.get("/new", function (req, res) {
  res.render("form", { title: "Hey there!" });
});

router.post("/new", function (req, res, next) {
  let author = req.body.author;
  let msg = req.body.msg;
  messages.push({ user: author, message: msg, time: new Date() });
  res.redirect("/");
});

module.exports = router;
