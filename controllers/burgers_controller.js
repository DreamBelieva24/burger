//import the following:
var express = require("express");

var router = express.Router();
// Express
// burger.js
var burger = require("../models/burger.js");


//Create the router for the app, and export the router at the end of your file.

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burger", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.name, false
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  
  
  // Export routes for server.js to use.
  module.exports = router;