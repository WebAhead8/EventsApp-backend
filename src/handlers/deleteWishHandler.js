const model = require("../database/model/wishModles");

function deleteWishHandler(req, res, next) {

  const wishId = req.param.id;

  model.deleteWish(wishId)
    .then(data => {
      res.status(200).send({ status: "event deleted successfully" })
    }).catch(err => console.log(err));


}
module.exports = deleteWishHandler;