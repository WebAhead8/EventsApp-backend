const model = require("../database/model/wishModles");


function getWishByIdHandler(req, res, next) {

  const id = req.params.id;
  model.getWishById(id)
    .then(wishId => {
      // wishId ? res.status(200).send({ wish }) : res.status(404).send({ status: "invalid wish id" });
      if (wishId.length > 0) {
        res.status(200).send({ wishId })
      }
      else {
        res.status(404).send({ status: "invalid wish id" });
      }

    }).catch(next);
}

module.exports = getWishByIdHandler;