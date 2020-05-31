const express = require('express');
const router = express.Router();
const relegateRuleDAO = require('../dao/relegateRuleDAO');
const result = require('../model/result');

/* GET users listing. */
router.get('/rule/index', function (req, res, next) {

  relegateRuleDAO.list(function (rules) {
    res.json(result.jsonResult(true, rules));
  });
});

module.exports = router;
