const model = require("../database/model/wishModles");
const eventmodel = require("../database/model/eventModels");
const Wish = require("../database/schema/Wish");

function deleteWishHandler(req, res, next) {
  const wishId = req.params.id;
  model.getWishById(wishId).then((wish) => {
    if (wish.length > 0) {
      eventmodel
        .getEventById(wish[0].event)
        .then((event) => {
          if (JSON.stringify(event[0].owner[0]._id) === JSON.stringify(req.user) || JSON.stringify(wish[0].owner)===JSON.stringify(req.user)) {
            model
              .deleteWish(wishId)
              .then((data) => {
                res.status(200).send({ status: "wish deleted successfully" });
              })
              .catch(next);
          } else {
            res.status(401).send({ status: "not Authorized" });
          }
        })
        .catch(next);
    } else {
      res.status(400).send({ status: "wish not found" });
    }
  });
}

module.exports = deleteWishHandler;
