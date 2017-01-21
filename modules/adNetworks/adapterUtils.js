
var revContentAdapter = require('./adapters/revcontent');
var startAppAdapter = require('./adapters/startapp');
var generalUtils = require('../util/general');

var self;
function AdapterUtils() {
    this.utils=new generalUtils();
    self=this;
}

AdapterUtils.prototype.getAds = function (req) {

    /*@Steps:
     * 1-Calculate random number based on the adapters array.
     * 2-Pick adapter based on the random number.
     * 3-Call its getAds Function and give back response as resolved promise.*/

    return new Promise(function (resolve, reject) {

        var adapters = [
            new revContentAdapter(req.originalUrl).getAds,
            //startAppAdapter.getAds
        ];

        var index=self.utils.getRandomNumberFromRange(0,adapters.length);
        adapters[index](req)
            .then(function (response) {

                resolve(response);
            })
            .catch(function (err) {
                reject(err);
            })

    }).then(function (responseData) {

            return responseData;
        })
        .catch(function (error) {

            console.log(error);
            reject(error);
        });
};

module.exports=new AdapterUtils();