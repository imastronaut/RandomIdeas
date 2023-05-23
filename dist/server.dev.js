"use strict";

var express = require('express');

var path = require('path');

var ideasRouter = require('./routes/idea.js');

var cors = require('cors');

require('dotenv').config();

var port = process.env.PORT || 5000;
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
})); //cors middleware

app.use(cors({
  origin: ['http://localhost:5000', 'http://localhost:3000'],
  credentials: true
}));
app.use(express["static"](path.join(__dirname, 'public')));

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
