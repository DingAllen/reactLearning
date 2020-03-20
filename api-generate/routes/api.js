var express = require('express');
var router = express.Router();

router.get('/todolist', function(req, res, next) {
    res.send(['俊霖无敌', '沈大可', '启动子终止子'])
  });
  
  module.exports = router;