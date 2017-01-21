/**
 * Created by GoogsApps on 19/08/16.
 */

// your application's code
var config = require('./config');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var FileStreamRotator = require('file-stream-rotator');
var fs = require('fs');
var express = require('express');
var morgan = require('morgan');
var request = require('request');
var path = require('path');
var app = express();


var http = require('http');
var server = http.createServer(app);



mongoose.Promise = require('bluebird');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


var logDirectory = __dirname + '/log';
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// create a rotating write stream
var accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: logDirectory + '/access-%DATE%.log',
    frequency: 'daily',
    verbose: false
});
// setup the logger
app.use(morgan('combined', {stream: accessLogStream}));
app.use(morgan('dev'));

mongoose.connect(config.database, function (err) {
    if (err)
        console.log(err);
    else {
        console.log('database connected');
    }

});


app.use(express.static(__dirname + '/public'));




server.listen(config.port, function (err) {
    if (err)
        console.log(err);
    else
        console.log('server running at  ' + config.port);

});


var cors = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "accept, content-type, x-access-token, x-requested-with");
    next();
};

app.use(cors);

app.use(require('./modules/user/middleware').storeDeviceIdInRequest);
app.use('/patch',require('./modules/patch/router'));
app.use('/banner',require('./modules/bannerAds/router'));
app.use('/lockscreenbanner',require('./modules/lockScreenBannerAds/router'));
app.use('/notification',require('./modules/notificationAds/router'));
app.use('/icon',require('./modules/iconAds/router'));
app.use('/user',require('./modules/user/router'));
app.use('/config',require('./modules/userConfig/router'));
app.use('/trafficMaster',require('./modules/trafficMaster/router'));

//require('./modules/bots/botRunner').start();

/*Sample Routing
 *
 * app.use('^/api/getpublications', crossrefroute);
 app.use('^/mendeley', require('./modules/mendeley/router'));
 *
 * */
