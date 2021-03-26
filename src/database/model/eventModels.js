const mongoose = require("mongoose");
const Event = require("../schema/Event");
const Wish = require("../schema/Wish");

function addEvent(eventDetails) {
  eventDetails.owner = mongoose.Types.ObjectId(eventDetails.owner);
  let eventModel = new Event(eventDetails);
  return eventModel.save();
}

function getEventById(eventId) {
  const objectId = mongoose.Types.ObjectId(eventId);
  const obj = { _id: objectId };
  return Event.aggregate([
    { $match: { _id: objectId } },
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
          { $project: { firstName:1,lastName:1,email: 1,birthday: 1,phoneNumber: 1}}
        ],
      },
    },
  ]);
}

function getAllEvents() {
  // return Event.find({});

  return Event.aggregate([

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
          { $project: { firstName:1,lastName:1,email: 1,birthday: 1,phoneNumber: 1}}
        ],
      },
    },
  ]);
}

function editEventTitle(eventDetails) {
  const objectId = mongoose.Types.ObjectId(eventDetails.id);
  return Event.updateOne(
    { _id: objectId },
    { $set: { title: eventDetails.title } }
  );
}

function editEventDescription(eventDetails) {
  const objectId = mongoose.Types.ObjectId(eventDetails.id);
  return Event.updateOne(
    { _id: objectId },
    { $set: { description: eventDetails.description } }
  );
}

function editEventDate(eventDetails) {
  const objectId = mongoose.Types.ObjectId(eventDetails.id);
  return Event.updateOne(
    { _id: objectId },
    { $set: { date: eventDetails.date } }
  );
}

function editEventLocation(eventDetails) {
  const objectId = mongoose.Types.ObjectId(eventDetails.id);
  return Event.updateOne(
    { _id: objectId },
    { $set: { location: eventDetails.location } }
  );
}

function deleteEvent(eventId) {
  const objectId = mongoose.Types.ObjectId(eventId);
  return Event.deleteOne({ _id: objectId });
}

function getUserEvents(userId) {
  const objectId = mongoose.Types.ObjectId(userId);
  return Event.find({ owner: objectId });
}

module.exports = {
  addEvent,
  getEventById,
  getAllEvents,
  getUserEvents,
  editEventTitle,
  editEventDescription,
  editEventDate,
  editEventLocation,
  deleteEvent,
};
