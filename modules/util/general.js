
function generalUtils() {

    var CustomError = function CustomError(message) {
        this.name = 'CustomError';
        this.message = message || '';
        var error = new Error(this.message);
        error.name = this.name;
        this.stack = error.stack;
    };
    CustomError.prototype = Object.create(Error.prototype);
}

generalUtils.prototype.jsonToGetParams = function (obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
};

generalUtils.prototype.getClientIp = function (req) {
    return (req.headers['x-forwarded-for'] || '').split(',')[0]
        || req.connection.remoteAddress;
};

generalUtils.prototype.getClientUserAgent = function (req) {
    return req.headers['user-agent'];
};

generalUtils.prototype.getRandomNumberFromRange = function (start, end) {
    return Math.floor(Math.random() * end) + start;
};

generalUtils.prototype.getRandomArbitrary  = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

generalUtils.prototype.getRandomStringOfLength = function (length) {

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;

};

module.exports = generalUtils;
