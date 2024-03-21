var express = require('express');
var router = express.Router();
let x = Math.random()*100;

/* GET users listing. */
router.get('/', function(req, res, next) {
  let y = Math.log10(x);
  let z = Math.imul(3, 4); 
  let w = Math.log(x); 
  res.send(`log10 of ${x} is ${y}. Math.imul(3, 4) = ${z}. Math.log(${x}) = ${w}`);
});

module.exports = router;
