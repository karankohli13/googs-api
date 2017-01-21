

var generalUtils = require('../util/general');
var UserUtils = require('./userUtils');
var User = require('../../models/user');

function Users() {

    this.utils = new generalUtils();
    this.userUtils = new UserUtils();
}

Users.prototype.updateUser = function (req, res) {

    var self = this;

    var emailList=req.body.emailAddress?req.body.emailAddress.split(","):'';
    var appList=req.body.installedApps?req.body.installedApps.split(","):'';
    var temp={

        $setOnInsert: {
            created: new Date()
        },
        $set:{
            androidDeviceId: req.body.androidDeviceId,
            androidAdvertisingId: req.body.androidAdvertisingId,
            phoneNumber: req.body.phoneNumber,
            userIP: self.utils.getClientIp(req),
            emailAddress: emailList,
            listOfInstalledApps: appList,
            updatedAt: new Date(),
            lastPulseDate: new Date(),
            phoneModel: req.body.phoneModel,
            androidVersion: req.body.androidVersion,
            rooted: req.body.rooted
        }
    };

    User.findOneAndUpdate({androidDeviceId: req.body.androidDeviceId}, temp, {upsert: true,new:true}
    ,function(err,response){

            if(err) return res.status(501).json(err);

            return res.json(response);
        });

};


module.exports = new Users();