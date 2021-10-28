var express = require("express");
var router = express.Router();
var a;
var log2;
var cosh;
var floor;

/* GET users listing. */

router.get("/", function (req, res, next) {
  a = Math.random() * (100 - 1) + 1;
  a1 = Math.random() * (100 - 1) + 1;

  log2 = Math.log2(a);

  cosh = Math.cosh(a);

  floor = Math.floor(a,a1);

  res.send(`(log2) applied to (${a}) is ${log2} <br>

            (cosh) applied to (${a}) is ${cosh} <br>

            (floor) applied to (${a},${a1}) is ${floor}`);
});

module.exports = router;