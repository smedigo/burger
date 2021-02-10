var express = require("express");

var router = express.Router();


var burger = require("../model/burger.js");

// get route _index
router.get("/", function(req, res) {
    res.redirect("/burgers");
});


router.get("/burgers", function(req, res) {
    burger.all(function(burgerData) {
        // wrapper for orm.js that using MySQL qury callback will return burger_data, then render to index with handlebar
        res.render("index", { burger_data: burgerData});
    });
});


// post route back to index
router.post("/burgers", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
      console.log(result);
      res.redirect("/")
  });
});



router.put("/burgers/:id", function(req, res) {
  var condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// Export routes for server.js to use.
module.exports = router;
