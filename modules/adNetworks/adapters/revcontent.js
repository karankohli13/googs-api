var request = require('request-promise');

var generalUtils = require('../../util/general');

var config=require('../../../config');

/*

 This is the output format

 var tempOutput = {
 type: "text_banner",
 "imp_url": temp.imp_url,
 "title": temp.title,
 "icon_url": temp.icon_url,
 "description": temp.description,
 "action_button_icon": temp.action_button_icon,
 "action_button_title": temp.action_button_title,
 "click_url": temp.click_url,
 "banner_bg_color": temp.banner_bg_color,
 "cross_btn_img": temp.cross_btn_img,
 "title_color": temp.title_color,
 "main_img_url":""
 };
 */

var hour = new Date().getHours();
var self;
function Revcontent(opts) {
    this.opts = opts;
    this.widget='';
    this.oreqUrl = this.opts;



    if (!opts)
        this.opts = {};

    self=this;
}

Revcontent.prototype.getAds = function (req) {
    console.log('rrrr ' + self.oreqUrl);

    if(self.oreqUrl === "/icon/"){
        self.widget = config.adapters.revcontent.widget_id_icon;
    } else if(self.oreqUrl === "/notification/")
    {
        self.widget = config.adapters.revcontent.widget_id_notification;

    } else if(self.oreqUrl === "/lockscreenbanner/")
    {
        self.widget = config.adapters.revcontent.widget_id_locksreen;
    } else{
        self.widget = config.adapters.revcontent.widget_id;
    }




    return new Promise(function (resolve, reject) {
        var utils = new generalUtils();

        var ipCreated = '125.63.88.242';
        console.log('ipcreadedo '+ ipCreated);

        var xipget =  req.headers['x-real-ip'];
        console.log('xipgett '+ xipget);

        if(xipget !== undefined){
            ipCreated = xipget;
        }

        console.log('bool '+ self.bool);
        console.log('hour '+ self.hour);

        console.log('ipcreaded '+ ipCreated);

        //Todo:Find out why user_ip and user_agent is params are not working
        var params = {
            api_key: config.adapters.revcontent.api_key,
            pub_id: config.adapters.revcontent.pub_id,
            widget_id: self.widget,
            domain: config.adapters.revcontent.domain,
            referer: config.adapters.revcontent.referer,
            img_w:70,
            img_h:70,
            format: 'json',
            sponsored_count: self.opts.count || '25',
            sponsored_offset: self.opts.offset || 0,
            internal_count: 0,
            user_ip:ipCreated,
            //user_ip: '71.100.91.35',
            //user_agent: utils.getClientUserAgent(req)
        };

        console.log(req.connection.remoteAddress);

        var reqUrl = 'https://trends.revcontent.com/api/v1/?' + utils.jsonToGetParams(params);
        console.log('url ' + reqUrl);
        var options = {
            method: 'GET',
            uri: reqUrl,
            json: true,
            headers: {
                //user_ip: encodeURIComponent(utils.getClientIp(req)),
                //user_agent: encodeURIComponent(utils.getClientUserAgent(req))
            }
        };



        request(options)
            .then(function (response) {

                //console.log(' ress ' + JSON.stringify(response));

                var processedResponse = [];

                for (var i = 0; i < response.length; i++) {
                    var temp = response[i];

                    var processedTemp =
                    {
                        "click_url": 'http:'+temp.url,
                        "title": temp.brand,
                        "icon_url":'http:' + temp.image,
                        "description":temp.headline,
                        "action_button_title":"Click Here"
                    };
                    processedResponse.push(processedTemp);


                    /* var processedTemp =
                     {
                     "click_url": 'http:'+temp.url,
                     "title": temp.brand,
                     "icon_url":'http:' + temp.image,
                     "description":temp.headline,
                     "action_button_title":"Click Here",
                     //"widget_id":self.widget,
                     //'orequrl':self.oreqUrl
                     };
                     processedResponse.push(processedTemp);*/

                }

                resolve(processedResponse);

            })
            .catch(function (err) {
                console.log('catch error1 '+err);
                reject(err);
            });


    }).then(function (responseData) {
        //console.log('respdata '+ responseData);

        return responseData;
    })
        .catch(function (error) {
            console.log('catch error '+ error);
            //console.log(error);
            reject(error);
        });

};

module.exports = Revcontent;


var request = require('request-promise');

var generalUtils = require('../../util/general');

var config=require('../../../config');

/*

 This is the output format

 var tempOutput = {
 type: "text_banner",
 "imp_url": temp.imp_url,
 "title": temp.title,
 "icon_url": temp.icon_url,
 "description": temp.description,
 "action_button_icon": temp.action_button_icon,
 "action_button_title": temp.action_button_title,
 "click_url": temp.click_url,
 "banner_bg_color": temp.banner_bg_color,
 "cross_btn_img": temp.cross_btn_img,
 "title_color": temp.title_color,
 "main_img_url":""
 };
 */

var hour = new Date().getHours();
var self;
function Revcontent(opts) {
    this.opts = opts;
    this.widget='';
    this.oreqUrl = this.opts;



    if (!opts)
        this.opts = {};

    self=this;
}

Revcontent.prototype.getAds = function (req) {
    console.log('rrrr ' + self.oreqUrl);

    if(self.oreqUrl === "/icon/"){
        self.widget = config.adapters.revcontent.widget_id_icon;
    } else if(self.oreqUrl === "/notification/")
    {
        self.widget = config.adapters.revcontent.widget_id_notification;

    } else if(self.oreqUrl === "/lockscreenbanner/")
    {
        self.widget = config.adapters.revcontent.widget_id_locksreen;
    } else{
        self.widget = config.adapters.revcontent.widget_id;
    }




    return new Promise(function (resolve, reject) {
        var utils = new generalUtils();
        n1 = utils.getRandomArbitrary(71,90);
        n2 = utils.getRandomArbitrary(71,240);
        n3 = utils.getRandomArbitrary(71,240);
        n4 = utils.getRandomArbitrary(71,240);

        var ipCreated = n1+'.'+n2+'.'+n3+'.'+n4;
        console.log('ipcreadedo '+ ipCreated);

        var xipget =  req.headers['x-real-ip'];
        console.log('xipgett '+ xipget);

        if(xipget !== undefined){
            ipCreated = xipget;
        }

        console.log('bool '+ self.bool);
        console.log('hour '+ self.hour);

        console.log('ipcreaded '+ ipCreated);

        //Todo:Find out why user_ip and user_agent is params are not working
        var params = {
            api_key: config.adapters.revcontent.api_key,
            pub_id: config.adapters.revcontent.pub_id,
            widget_id: self.widget,
            domain: config.adapters.revcontent.domain,
            referer: config.adapters.revcontent.referer,
            img_w:70,
            img_h:70,
            format: 'json',
            sponsored_count: self.opts.count || '25',
            sponsored_offset: self.opts.offset || 0,
            internal_count: 0,
            user_ip:ipCreated,
            //user_ip: '71.100.91.35',
            //user_agent: utils.getClientUserAgent(req)
        };

        console.log(req.connection.remoteAddress);

        var reqUrl = 'https://trends.revcontent.com/api/v1/?' + utils.jsonToGetParams(params);
        console.log('url ' + reqUrl);
        var options = {
            method: 'GET',
            uri: reqUrl,
            json: true,
            headers: {
                //user_ip: encodeURIComponent(utils.getClientIp(req)),
                //user_agent: encodeURIComponent(utils.getClientUserAgent(req))
            }
        };



        request(options)
            .then(function (response) {

                //console.log(' ress ' + JSON.stringify(response));

                var processedResponse = [];

                for (var i = 0; i < response.length; i++) {
                    var temp = response[i];

                    var processedTemp =
                    {
                        "click_url": 'http:'+temp.url,
                        "title": temp.brand,
                        "icon_url":'http:' + temp.image,
                        "description":temp.headline,
                        "action_button_title":"Click Here"
                    };
                    processedResponse.push(processedTemp);


                    /* var processedTemp =
                     {
                     "click_url": 'http:'+temp.url,
                     "title": temp.brand,
                     "icon_url":'http:' + temp.image,
                     "description":temp.headline,
                     "action_button_title":"Click Here",
                     //"widget_id":self.widget,
                     //'orequrl':self.oreqUrl
                     };
                     processedResponse.push(processedTemp);*/

                }

                resolve(processedResponse);

            })
            .catch(function (err) {
                console.log('catch error1 '+err);
                reject(err);
            });


    }).then(function (responseData) {
        //console.log('respdata '+ responseData);

        return responseData;
    })
        .catch(function (error) {
            console.log('catch error '+ error);
            //console.log(error);
            reject(error);
        });

};

module.exports = Revcontent;


