const express = require("express");

const configMiddleware = require("../config/middleware");
const routers = require("../config/routers");

const server = express();

configMiddleware(server);

routers.noteRouters(server);
routers.userRouters(server);

// test API root path
server.get("/", (_, res) => {
  res
    .status(200)
    .send(
      "Hi! To see Lambda Notes API, go to <a href='http://localhost:9500/api/notes'>./api/notes</a>"
    );
});

module.exports = server;