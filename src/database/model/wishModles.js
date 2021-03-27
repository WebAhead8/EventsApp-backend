const mongoose = require('mongoose');
const { db } = require('../schema/Wish');
const Wish = require('../schema/Wish')
function getWishesForEvent(eventId) {
  const objectId = mongoose.Types.ObjectId(eventId);
  const obj = { event: objectId }
  return Wish.aggregate([
    { $match: { event: objectId } },
    {
      $lookup: {
        from: "users",
        as: "owner",
        let: { ownerId: "$owner" },

        pipeline: [
          {
            $match: {
              $expr: { $eq: ["$$ownerId", "$_id"] },
            },
          },
          { $project: { _id:0,firstName:1,lastName:1}}
        ],
      },
    },
  ]);
}
function getWishById(wishId) {
  const id = mongoose.Types.ObjectId(wishId);
  const obj = { _id: id }
  return Wish.find(obj)
}
function addWish(wishDetails) {
  wishDetails.owner = mongoose.Types.ObjectId(wishDetails.owner);
  let newWish = new Wish(wishDetails);
  return newWish.save();
}
function deleteWish(wishId) {
  const id = mongoose.Types.ObjectId(wishId);
  return Wish.deleteOne({ _id: id })
}
module.exports = { getWishesForEvent, getWishById, addWish, deleteWish };