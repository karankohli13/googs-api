

var generalUtils = require('../util/general');
var IconAdUtils=require('./iconAdUtils');
var AdapterUtils=require('./../adNetworks/adapterUtils');

function IconAds() {

    this.utils=new generalUtils();
    this.iconAdUtils=new IconAdUtils();
}

IconAds.prototype.getNewIconAd = function (req, res) {

    var self=this;

    AdapterUtils.getAds(req)
        .then(function(response){

            res.json(self.iconAdUtils.applyFilter(response[self.utils.getRandomNumberFromRange(0, response.length)]));
        })
        .catch(function(err){

            res.status(500).json(err);
        });

};


module.exports = new IconAds;
