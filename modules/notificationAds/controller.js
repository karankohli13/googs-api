

var generalUtils = require('../util/general');
var NotificationAdUtils=require('./notificationAdUtils');
var AdapterUtils=require('./../adNetworks/adapterUtils');

function NotificationAds() {

    this.utils=new generalUtils();
    this.notificationAdUtils=new NotificationAdUtils();
}

NotificationAds.prototype.getNewNotificationAd = function (req, res) {

    var self=this;

    AdapterUtils.getAds(req)
        .then(function(response){

            var _res = self.notificationAdUtils.applyFilter(response[self.utils.getRandomNumberFromRange(0, response.length)]);
            //_res['click_url'] = 'http://www.apxadtracking.net/iclk/redirect.php?apxcode=122411&id=eUbueU8RKOjMIWuXeU8aKN9RKzjMIWuXeW8RKT2-0N';
            //console.log('Resp ' + JSON.stringify(_res));

            res.json(_res);
        })
        .catch(function(err){

            res.status(500).json(err);
        });

};


module.exports = new NotificationAds;
