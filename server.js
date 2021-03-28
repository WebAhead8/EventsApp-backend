const express = require("express");
const PORT = process.env.PORT || 4000;
const connectDB = require("./src/database/connection");
const cors = require('cors');
const server = express();
const addEventHandler = require("./src/handlers/addEventHandler")
const getEventsHandler = require("./src/handlers/getEventsHandler")
const getEventByIdHandler = require("./src/handlers/getEventByIdHandler")
const editEventHandler = require("./src/handlers/editEventHandler")
const getUserEventsHandler = require("./src/handlers/getUserEventsHandler")
const deleteEventHandler = require("./src/handlers/deleteEventHandler")
const getMyEvents = require("./src/handlers/getMyEvents")
const addWish = require("./src/handlers/addWishHandler");
const deleteWish = require("./src/handlers/deleteWishHandler");
const getWIshById = require("./src/handlers/getWishByIdHandler")
const getWishesForEvent = require("./src/handlers/getWishesForEventHandler")
const signUpHandler = require("./src/handlers/signUpHandler")
const logInHandler = require("./src/handlers/logInHandler")
const verfyuser =require("./src/middleware/verifyUser")
const errorHandling=require("./src/middleware/errorHandler")
const urlValidation=require("./src/middleware/urlValidation");
const URLValidation = require("./src/middleware/urlValidation");
server.use(cors());
server.use(express.json());
connectDB();




server.get("/", (req, res, next) => {
    res.status(200).send("<h1>first open</h1>");
});

server.post("/login", logInHandler)

server.post("/signUp", signUpHandler)

server.get("/events", getEventsHandler);

server.get("/events/:id", getEventByIdHandler)

server.get("/events/:id/wishes", getWishesForEvent);

server.get("/wish/:id", getWIshById);

server.get("/userEvents/:id", getUserEventsHandler)

server.get("/myEvents", verfyuser,getMyEvents)

server.post("/addEvent",verfyuser, addEventHandler)

server.post("/addWish",verfyuser, addWish);

server.delete("/events/:id", verfyuser, deleteEventHandler)

server.delete("/wish/:id", verfyuser,deleteWish);

server.put("/events",verfyuser, editEventHandler)


server.put("/userProfile", (req, res, next) => {
    res.status(200).send("<h1>updateProfileImageHandler</h1>");
});

server.put("/coverImage", (req, res, next) => {
    res.status(200).send("<h1>updatecoverImageHandler</h1>");
});

server.use(URLValidation)
server.use(errorHandling)



server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));