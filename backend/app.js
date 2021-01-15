const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const bp = require("body-parser");
const morgan = require("morgan");

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

//Routes
//app.use(require("./routes/auth.user"));
//app.use("/users", require("./routes/user.route"));

module.exports = app;
