
var express = require("express");

var router = express.Router();

var patchUpload=require('../util/patchUpload');
var Controller=require('./controller');

router.route('^/upload/$').post(patchUpload.single('patch'),Controller.uploadPatch);
router.route('^/$').get(Controller.getLatestPatch);
router.route('^/download/$').get(Controller.downloadLatestPatch);

module.exports = router;