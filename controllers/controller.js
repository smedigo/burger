var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   burger.all(function(data) {
//     var hbsObject = {
//       burger: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// get route -> index
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.all(function(burgerData) {
        res.render("index", { burger_data: burgerData});
    });
});


// post route -> back to index
router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
      console.log(result);
      res.redirect("/")
  });
});


// put route -> back to index
router.put("/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    burger: req.body.burger
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// Export routes for server.js to use.
module.exports = router;
