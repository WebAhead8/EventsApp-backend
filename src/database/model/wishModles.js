const mongoose = require('mongoose');
const { db } = require('../schema/Wish');
const Wish = require('../schema/Wish')
function getWishesForEvent(eventId) {
  const objectId = mongoose.Types.ObjectId(eventId);
  const obj = { _id: objectId }
  return Wish.find(obj)
}
function getWishById(wishId) {
  const wishId = mongoose.Types.ObjectId(wishId);
  const obj = { _id: wishId }
  return Wish.find(obj)
}
function addWish(wishDetails) {
  let newWish = new Wish(wishDetails);
  return newWish.save();
}
function deleteWish(wishId) {
  return Wish.deleteOne({ _id: wishId })
}
module.exports = { getWishesForEvent, getWishById, addWish, deleteWish };