var express = require('express');
var router = express.Router();
let product=1;
let factor=1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  factor++;
  product=product*factor;
  res.send(`product is ${product}`);
});

module.exports = router;
