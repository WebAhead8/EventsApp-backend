const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
      console.log(file)
    cb(null, Date.now() + '-' +file.originalname)
  }
})

const upload = multer({ storage: storage }).single('file')

function uploadImage(req,res,next)
{
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
          res.sendStatus(500);
        }
        res.send(req.file);
      });
}

module.exports=uploadImage;