

var generalUtils = require('../util/general');
var LockScreenBannerAdUtils=require('./lockScreenBannerAdUtils');
var AdapterUtils=require('./../adNetworks/adapterUtils');

function LockScreenBannerAds() {

    this.utils=new generalUtils();
    this.bannerAdUtils=new LockScreenBannerAdUtils();
}

LockScreenBannerAds.prototype.getNewBannerAd = function (req, res) {

    var self=this;

    AdapterUtils.getAds(req)
        .then(function(response){

            res.json(self.bannerAdUtils.applyBannerFilter(response[self.utils.getRandomNumberFromRange(0, response.length)]));
        })
        .catch(function(err){

            res.status(500).json(err);
        });

};



module.exports = new LockScreenBannerAds;