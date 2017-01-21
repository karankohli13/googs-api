
var multer = require('multer');

var filePath=process.env.uploadPath || './uploads';
var storage = multer.diskStorage({
    destination: filePath,
    filename: function (req, file, cb) {
        cb(null,Date.now()+ '-' + file.originalname)
    }
});

var upload = multer({ storage: storage });

module.exports = upload;