/**
 * Created by googsApp on 09/08/16.
 */
var mongoose = require('mongoose');


var PatchSchema = mongoose.Schema({

    patchVersion:{type:Number,required:true},
    baseApkTagVersion: {type: String,required:true},
    path: {type: String,required:true}
});

/*@Todo:Add a combination unique index on patchVersion and baseApkTagVersion*/

module.exports = mongoose.model('patch', PatchSchema);
