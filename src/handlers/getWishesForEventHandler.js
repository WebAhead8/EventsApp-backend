const model = require("../database/model/wishModles");

function getWishesForEventHandler(req, res, next) {

  const id = req.params.id;
  model.getWishesForEvent(id)
    .then(wishes => {
      if (wishes.length > 0) {
        res.status(200).send(wishes)
      }

      else {
        res.status(200).send({ status: "no wishes for this event" })
      }
    }).catch(next)


}

module.exports = getWishesForEventHandler;