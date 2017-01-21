

function UserDetailsMiddlewre() {

}

UserDetailsMiddlewre.prototype.storeDeviceIdInRequest=function(req,res,next) {

    console.log('Request from:'+req.headers['device-id']);

    next();
};


module.exports=new UserDetailsMiddlewre();