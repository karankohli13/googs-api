
var path = require('path');
var childProcess = require('child_process');
var binPath = 'casperjs';
var generalUtils = require('../util/general');
var getJarBot=require('./getJarBot');
var PromisifiedChildProcess = require('bluebird').promisify(childProcess.exec);

var self;
function BotRunner() {
    self = this;
    self.downloadCount = 0;
    this.utils = new generalUtils();
}

BotRunner.prototype.start = function () {

   // for (var i = 0; i < 10; i++)
    //runOnce();

    //getJarBot.startWork();
};

var runOnce = function () {

    var command = '--proxy=zproxy.luminati.io:22225 --proxy-auth=lum-customer-darwin-zone-node-country-us-session-rand_d_l_' + self.utils.getRandomStringOfLength(5) + ':55832075e99d ';
    console.log(command);

    PromisifiedChildProcess(binPath + ' ' + command + path.join(__dirname, 'scraping.js'))
        .then(function (stdout, stderr) {

            self.downloadCount++;
            console.log(self.downloadCount);

            runOnce();
        })
        .catch(function (err) {
            console.log(err);
            runOnce();
        });
};



module.exports = new BotRunner();
