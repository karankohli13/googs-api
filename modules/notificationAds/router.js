
var express = require("express");

var router = express.Router();

var Controller=require('./controller');

router.route('^/$').get(Controller.getNewNotificationAd.bind(Controller));

module.exports = router;