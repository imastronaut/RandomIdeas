"use strict";

var express = require('express');

var router = express.Router();

var Idea = require('../models/Idea');

var ideas = [{
  id: 1,
  text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
  tag: 'Technology',
  username: 'TonyStark',
  date: '2022-01-02'
}, {
  id: 2,
  text: 'Milk cartons that turn a different color the older that your milk is getting',
  tag: 'Inventions',
  username: 'SteveRogers',
  date: '2022-01-02'
}, {
  id: 3,
  text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
  tag: 'Software',
  username: 'BruceBanner',
  date: '2022-01-02'
}];
router.get('/', function _callee(req, res) {
  var _ideas;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Idea.find());

        case 3:
          _ideas = _context.sent;
          res.json({
            success: true,
            data: _ideas
          });
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            success: true,
            error: "Something went wrong"
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.get('/:id', function _callee2(req, res) {
  var idea;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Idea.findById(req.params.id));

        case 3:
          idea = _context2.sent;
          res.json({
            success: true,
            data: idea
          });
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            success: true,
            error: "Something went wrong"
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.post('/', function _callee3(req, res) {
  var idea, savedIdea;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          idea = new Idea({
            text: req.body.text,
            tag: req.body.tag,
            username: req.body.username
          });
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(idea.save());

        case 4:
          savedIdea = _context3.sent;
          res.json({
            success: true,
            data: savedIdea
          });
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);
          res.status(500).json({
            success: false,
            error: "Something went wrong"
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
router.put('/:id', function _callee4(req, res) {
  var idea, updatedIdea;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Idea.findById(req.params.id));

        case 3:
          idea = _context4.sent;

          if (!(idea.username === req.body.username)) {
            _context4.next = 9;
            break;
          }

          _context4.next = 7;
          return regeneratorRuntime.awrap(Idea.findByIdAndUpdate(req.params.id, {
            $set: {
              text: req.body.text,
              tag: req.body.tag
            }
          }, {
            "new": true
          }));

        case 7:
          updatedIdea = _context4.sent;
          return _context4.abrupt("return", res.json({
            success: true,
            data: updatedIdea
          }));

        case 9:
          res.status(403).json({
            success: false,
            error: "You are not authorized to update this idea"
          });
          _context4.next = 16;
          break;

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          res.status(500).json({
            success: false,
            error: "Something went wrong"
          });

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 12]]);
});
router["delete"]('/:id', function _callee5(req, res) {
  var idea, deletedIdea;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Idea.findById(req.params.id));

        case 3:
          idea = _context5.sent;

          if (!(idea.username === req.body.username)) {
            _context5.next = 9;
            break;
          }

          _context5.next = 7;
          return regeneratorRuntime.awrap(Idea.findByIdAndDelete(req.params.id));

        case 7:
          deletedIdea = _context5.sent;
          return _context5.abrupt("return", res.json({
            success: true,
            data: deletedIdea
          }));

        case 9:
          res.status(403).json({
            success: false,
            error: "You are not authroized to delete this idea"
          });
          _context5.next = 16;
          break;

        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          res.json({
            success: false,
            error: "Something went wrong"
          });

        case 16:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 12]]);
});
module.exports = router;
//# sourceMappingURL=idea.dev.js.map
