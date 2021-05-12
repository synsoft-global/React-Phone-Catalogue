module.exports = function (models) {
    var express = require("express");
    var router = express.Router();
    // let upload = require("../middleware/multer");
    const path = require('path');
    const multer = require('multer');
    let phoneController = require("../controllers/phones.controller.js");
    let phones = new phoneController(models);

    router.route('/Create')
        .post(function (req, res) {
            phones.createPhone(req, res);
        });
      router.route('/getListPhone')
        .get(function (req, res) {
            phones.getListPhone(req,res);
        });

        router.route('/getPhoneDetails')
        .get(function (req, res) {
            phones.getPhoneDetails(req,res);
        });
        router.route('/update').put(function(req,res){
          phones.updatePhone(req,res);
        });

       router.route('/delete').delete(function(req,res){
          phones.deletePhone(req,res);
      })
        
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'uploads');
            },
            filename: (req, file, cb) => {
                console.log(file);
                cb(null, Date.now() + path.extname(file.originalname));
            }
        });
        const fileFilter = (req, file, cb) => {
            console.log("uplaods file data is here ",file);
            if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
                cb(null, true);
            } else {
                cb(null, false);
            }
        }
        const upload = multer({ storage: storage, fileFilter: fileFilter });
        //Upload route
        router.route('/upload')
        .post(upload.single('image'),function (req, res) {
            try {
                // console.log("server responce after uploads image",res);
                return res.status(201).json({
                    message: 'image uploded successfully',
                    file: res.req.file
                });
            } catch (error) {
                console.error("server error is here ",error);
                return res.status(201).json({
                    message: 'Failed to uploads',
                    error: error
                });
            
            }
        });
        
    return router;
}

// validate.ismobile,