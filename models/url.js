/**
 * Created by kohli on 10/04/17.
 */
var mongoose = require('mongoose');


var UrlSchema = mongoose.Schema({
    category:{type:String,required:true},
    url: {type: String,required:true},
    targetRegion: {type: String,required:true},
    views: {type: Number}
});

module.exports = mongoose.model('url', UrlSchema);
