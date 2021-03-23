const express = require("express");
const PORT = process.env.PORT || 4000;
const connectDB = require("./src/database/connection");
const cors = require('cors');
const server = express();
const addEventHandler=require("./src/handlers/addEventHandler")
const getEventsHandler=require("./src/handlers/getEventsHandler")
const getEventByIdHandler=require("./src/handlers/getEventByIdHandler")
const editEventHandler=require("./src/handlers/editEventHandler")
const getUserEventsHandler=require("./src/handlers/getUserEventsHandler")
const deleteEventHandler=require("./src/handlers/deleteEventHandler")
server.use(cors());
server.use(express.json());
connectDB();

server.get("/",(req, res, next)=>{
    res.status(200).send("<h1>first open</h1>");
});

server.post("/login",(req, res, next)=>{
    res.status(200).send("<h1>loginHandler</h1>");
});

server.post("/signUp",(req, res, next)=>{
    res.status(200).send("<h1>signUpHandler</h1>");
});

server.get("/events",getEventsHandler);

server.get("/events/:id",getEventByIdHandler)

server.get("/events/:id/wishes",(req, res, next)=>{
    res.status(200).send("<h1>getWishesForEventHandler</h1>");
});

server.get("/wish/:id",(req, res, next)=>{
    res.status(200).send("<h1>getWishByIdHandler</h1>");
});

server.get("/userEvents/:id",getUserEventsHandler)

server.post("/addEvent",addEventHandler)

server.post("/addWish",(req, res, next)=>{
    res.status(200).send("<h1>addWishHandler</h1>");
});

server.delete("/events/:id",deleteEventHandler)

server.delete("/wish/:id",(req, res, next)=>{
    res.status(200).send("<h1>deleteEventHandler</h1>");
});

server.put("/events",editEventHandler)


server.put("/userProfile",(req, res, next)=>{
    res.status(200).send("<h1>updateProfileImageHandler</h1>");
});

server.put("/coverImage",(req, res, next)=>{
    res.status(200).send("<h1>updatecoverImageHandler</h1>");
});



server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));