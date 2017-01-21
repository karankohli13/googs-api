
var express = require("express");

var router = express.Router();

var Controller=require('./controller');

router.route('^/fetch/$').get(Controller.fetchConfig.bind(Controller));

module.exports = router;