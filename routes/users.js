var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('123');
  res.status(200);
  res.end();
});

module.exports = router;
