const express = require("express");
const path = require("path");
var cookieParser = require("cookie-parser");
const app = express();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("users", usersRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});

module.exports = app;
