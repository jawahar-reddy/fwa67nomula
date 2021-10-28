var express = require("express");

var router = express.Router();



/* GET home page. */

router.get("/", function (req, res, next) {

  res.render("mydata", {

    title: "Jawahar Reddy Nomula",

    fact: "I like riding bikes"

  });

});



module.exports = router