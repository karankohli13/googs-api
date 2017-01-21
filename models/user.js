
var mongoose = require('mongoose');


var UserSchema = mongoose.Schema({

    androidDeviceId:{type:String,required:true},
    androidAdvertisingId: {type: String},
    phoneNumber: {type: String},
    userIP: {type: String,required:true},
    emailAddress: [{type: String}],
    listOfInstalledApps: [{type: String}],
    created: {type: Date},
    updatedAt: {type: Date},
    lastPulseDate: {type: Date},
    phoneModel:{type:String},
    androidVersion: {type: String},
    rooted: {type: Boolean}
});

module.exports = mongoose.model('user', UserSchema);