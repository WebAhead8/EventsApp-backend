const model = require("../database/model/wishModles");

function addWishHandler(req, res, next) {
  const newWish = req.body;
  if(!newWish.owner || !newWish.event || !newWish.wish)
  {
    res.status(422).send({error:"fill all the field"})

  }else{
    model.addWish(newWish)
    .then(wishData => {
      res.status(201).send({ wishData })
    }).catch(next)
  }

}
module.exports = addWishHandler;