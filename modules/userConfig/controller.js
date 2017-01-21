

var generalUtils = require('../util/general');
var fs=require('fs');

function UserConfig() {

    this.utils = new generalUtils();
}

UserConfig.prototype.fetchConfig = function (req, res) {

    var self = this;

    fs.readFile('./userConfig.json','utf8', function read(err, data) {
        if (err) {
            return res.json(err);
        }

        res.json(JSON.parse(data));
    });

};


module.exports = new UserConfig();