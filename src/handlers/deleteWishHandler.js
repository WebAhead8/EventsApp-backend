const model = require("../database/model/wishModles");

function deleteWishHandler(req, res, next) {

  const wishId = req.params.id;

  model.deleteWish(wishId)
    .then(data => {
      res.status(200).send({ status: "event deleted successfully" })
    }).catch(next);


}
module.exports = deleteWishHandler;