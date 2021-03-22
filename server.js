const express = require("express");
const PORT = process.env.PORT || 4000;
const connectDB = require("./src/database/connection");
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());
connectDB();

server.get("/",(req, res, next)=>{
    res.status(200).send("<h1>first open</h1>");
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));