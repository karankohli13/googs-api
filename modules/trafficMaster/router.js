/**
 * Created by kohli on 10/04/17.
 */
var express = require("express");

var router = express.Router();

var Controller=require('./controller');

router.route('^/$').get(Controller.fetchUrl.bind(Controller));
router.route('^/$').post(Controller.addUrl.bind(Controller));
router.route('^/$').put(Controller.updateUrl.bind(Controller));
router.route('^/$').delete(Controller.deleteUrl.bind(Controller));

module.exports = router;
