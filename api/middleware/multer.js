var multer = require('multer')

/* image uplode filename   */

const storage = multer.diskStorage({
    destination: './uploads/profile',
    filename: (req, file, cb) => {
        console.log(file);
        var filetype = '';
        if (file.mimetype === 'image/gif') {
            filetype = 'gif';
        }
        if (file.mimetype === 'image/png') {
            filetype = 'png';
        }
        if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
        } else {
            filetype = "txt";
        }
        cb(null, 'image-' + Date.now() + '.' + filetype);
    },

});

var upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024 // 2 MB (max file size)
    },
    // fileFilter: (req, file, cb) => {
    //     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    //       cb(null, true);
    //     } else {
    //     //   cb(null, false);
    //       return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    //     }
    //   }
})

module.exports = upload;