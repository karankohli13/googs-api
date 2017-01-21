

//var request = require('request-promise');

var Patch = require('../../models/patch');
var fileSystem = require('fs'),
    path = require('path');

var uploadPatch = function (req, res) {

    var patch = new Patch();
    patch.baseApkTagVersion = req.body.baseApkTagVersion;
    patch.patchVersion = req.body.patchVersion;
    patch.path = req.file.path;

    patch.save()
        .then(function (saved) {

            res.json({message: 'patch Saved'});
        })
        .catch(function (err) {

            res.status(500).json(err);
        });
};

var getLatestPatchVersion = function (req, res) {

    var baseApkTagVersion = req.query.baseApkTagVersion;

    Patch.findOne(
        {
        baseApkTagVersion: baseApkTagVersion
        },null,{  sort: {
            patchVersion: -1
        }})
        .then(function (foundPatch) {
            res.json(foundPatch);
        })
        .error(function (err) {
            res.status(500).json(err);
        })
};

var downloadLatestPatchVersion=function(req,res) {
    var baseApkTagVersion = req.query.baseApkTagVersion;

    Patch.findOne(
        {
            baseApkTagVersion: baseApkTagVersion
        },null,{  sort: {
            patchVersion: -1
        }})
        .then(function (foundPatch) {

            var filePath = path.join(foundPatch.path);
            var stat = fileSystem.statSync(filePath);

            res.writeHead(200, {
                'Content-Type': 'application/vnd.android.package-archive',
                'Content-Length': stat.size,
                "Content-Disposition" : "attachment; filename=patch.apk"
            });

            var readStream = fileSystem.createReadStream(filePath);
            // We replaced all the event handlers with a simple call to readStream.pipe()
            readStream.pipe(res);
        })
        .error(function (err) {
            res.status(500).json(err);
        })
};
var redirectSample = function (req, res) {
    res.redirect('http://www.udhaar.appideas.in');


};


Controller = {

    uploadPatch: uploadPatch,
    getLatestPatch: getLatestPatchVersion,
    downloadLatestPatch: downloadLatestPatchVersion,
    redirect: redirectSample

};


module.exports = Controller;
