
var request = require('request-promise');

var generalUtils = require('../../util/general');

var config = require('../../../config');

function Startapp(opts) {
    this.opts = opts;

    if (!opts)
        this.opts = {};


}

Startapp.prototype.getAds = function (req) {

    var self = this;

    return new Promise(function (resolve, reject) {
        var utils = new generalUtils();

        //Todo:Replace these params with actual params
        var params = {
            partner: '856974125',
            token: '778645132',
            segId: '65437653',
            pub: '12345',
            prod: 'com.foobar.app',
            dip: encodeURIComponent(utils.getClientIp(req)),
            ua: encodeURIComponent(utils.getClientUserAgent(req)),
            adw: '100',
            adh: '100',
            adType: '2',
            os: '0',
            osVer: '4.1',
            isp: '42501',
            adsNum: '1',
            reqId: '1245'
        };

        var reqUrl = 'http://s2s.startappnetwork.com/s2s/1.3/ads?' + utils.jsonToGetParams(params);

        const options = {
            method: 'GET',
            uri: reqUrl,
            json: true
           /* headers: {
                user_ip: encodeURIComponent(utils.getClientIp(req)),
                user_agent: encodeURIComponent(utils.getClientUserAgent(req))
            }*/
        };

        request(options)
            .then(function (response) {

                //console.log(response);

                var processedResponse = [];

                for (var i = 0; i < response.ads.length; i++) {
                    var temp = response.ads[i];

                    var processedTemp =
                    {
                        "click_url": temp.clickUrl,
                        "title": temp.title,
                        "icon_url": temp.img,
                        "description": temp.desc,
                        "imp_url":temp.impUrl,
                        "action_button_title":"Install Now"
                    };

                    processedResponse.push(processedTemp);
                }

                resolve(processedResponse);

            })
            .catch(function (err) {
                console.log(err);
                reject(err);
            });


    }).then(function (responseData) {

            return responseData;
        })
        .catch(function (error) {

            console.log(error);
            reject(error);
        });

};

module.exports = new Startapp();