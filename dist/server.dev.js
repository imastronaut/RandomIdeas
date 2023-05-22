"use strict";

var express = require('express');

var ideasRouter = require('./routes/idea.js');

require('dotenv').config();

var port = process.env.PORT || 5000;
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

var connectDB = require('./config/db');

connectDB();
app.get('/', function (req, res) {
  res.send("Welcome to ideas app");
});
app.use('/api/ideas', ideasRouter);
app.listen(port, function () {
  return console.log("Server is running on port ".concat(port));
});
//# sourceMappingURL=server.dev.js.map
