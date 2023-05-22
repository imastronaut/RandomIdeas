"use strict";

var mongoose = require('mongoose');

var connectDB = function connectDB() {
  var conn;
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(mongoose.connect(process.env.MONGO_URI));

        case 2:
          conn = _context.sent;
          console.log("MongoDB connected : ".concat(conn.connection.host));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

mongoose.set('strictQuery', true);
module.exports = connectDB;
//# sourceMappingURL=db.dev.js.map
