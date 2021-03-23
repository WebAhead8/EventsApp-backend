const express = require("express");
const PORT = process.env.PORT || 4000;
const connectDB = require("./src/database/connection");
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());
connectDB();

const addWish = require("./src/handlers/addWishHandler");
const deleteWish = require("./src/handlers/deleteWishHandler");
const getWIshById = require("./src/handlers/getWishByIdHandler")
const getWishesForEvent = require("./src/handlers/getWishesForEventHandler")


server.get("/", (req, res, next) => {
    res.status(200).send("<h1>first open</h1>");
});

server.post("/login", (req, res, next) => {
    res.status(200).send("<h1>loginHandler</h1>");
});

server.post("/signUp", (req, res, next) => {
    res.status(200).send("<h1>signUpHandler</h1>");
});

server.get("/events", (req, res, next) => {
    res.status(200).send("<h1>getEventsHandler</h1>");
});

server.get("/events/:id", (req, res, next) => {
    res.status(200).send("<h1>getEventById</h1>");
});

server.get("/events/:id/wishes", getWishesForEvent);

server.get("/wish/:id", getWIshById);

server.get("/userEvents/:id", (req, res, next) => {
    res.status(200).send("<h1>getUserEventHandler</h1>");
});

server.post("/addEvent", (req, res, next) => {
    res.status(200).send("<h1>addEventHandler</h1>");
});

server.post("/addWish", addWish);

server.delete("/event/:id", (req, res, next) => {
    res.status(200).send("<h1>deleteEventHandler</h1>");
});

server.delete("/wish/:id", deleteWish);

server.put("/event/:id", (req, res, next) => {
    res.status(200).send("<h1>editEventHandler</h1>");
});


server.put("/userProfile", (req, res, next) => {
    res.status(200).send("<h1>updateProfileImageHandler</h1>");
});

server.put("/coverImage", (req, res, next) => {
    res.status(200).send("<h1>updatecoverImageHandler</h1>");
});



server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));