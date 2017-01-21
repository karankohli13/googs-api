
var express = require("express");

var router = express.Router();

var Controller=require('./controller');


router.route('^/$').get(Controller.getNewBannerAd.bind(Controller));

module.exports = router;