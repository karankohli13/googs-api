
var express = require("express");

var router = express.Router();

var Controller=require('./controller');


router.route('^/$').get(Controller.getNewIconAd.bind(Controller));

module.exports = router;