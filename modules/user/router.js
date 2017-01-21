
var express = require("express");

var router = express.Router();

var Controller=require('./controller');

router.route('^/update/$').put(Controller.updateUser.bind(Controller));

module.exports = router;