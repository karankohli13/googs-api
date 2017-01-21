

var generalUtils = require('../util/general');
var BannerAdUtils=require('./bannerAdUtils');
var AdapterUtils=require('./../adNetworks/adapterUtils');

function BannerAds() {

    this.utils=new generalUtils();
    this.bannerAdUtils=new BannerAdUtils();
}

BannerAds.prototype.getNewBannerAd = function (req, res) {

    var self=this;

    AdapterUtils.getAds(req)
        .then(function(response){

            res.json(self.bannerAdUtils.applyBannerFilter(response[self.utils.getRandomNumberFromRange(0, response.length)]));
        })
        .catch(function(err){

            res.status(500).json(err);
        });

};



module.exports = new BannerAds;