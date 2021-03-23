const model = require("../database/model/wishModles");

function addWishHandler(req, res, next) {
  const newWish = req.body;

  model.addWish(newWish)
    .then(wishData => {
      res.status(201).send({ wishData })
    }).catch(err => console.log(err))
}
module.exports = addWishHandler;