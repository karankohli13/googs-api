var moment = require('moment');

var GetDateObject = function(){
    var dateFormat = "YYYY-MM-DD";
    var start = moment().set('date', 1).format(dateFormat);
    var end = moment().set('date', moment().daysInMonth()).format(dateFormat);
    console.log(start , end);
    return  {$gte: new Date(start), $lte: new Date(end)};
}

module.exports = GetDateObject;