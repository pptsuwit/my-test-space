require("dotenv").config();
const port = process.env.PORT || 3000;
const io = require("socket.io")(port, {
  cors: {
    origin: `http://localhost:${process.env.CLIENT_PORT || 3000}`,
    methods: ["GET", "POST"],
  },
});

var msg = [];
io.on("connection", (socket) => {
  socket.on("connected", () => {
    console.log("Connection");
    io.emit("message", msg);
    // if (name.length) {
    //   msg.push({ name: name, message: message, createAt: createAt });
    //   io.emit("message", msg);
    // }
  });
  socket.on("message", (message, name, createAt) => {
    if (name.length) {
      msg.push({ name: name, message: message, createAt: createAt });
      io.emit("message", msg);
    }
  });
  // socket.on("message", (message, roomName) => {
  //   if (roomName.length) {
  //     console.log(roomName, message);
  //     io.to(roomName).emit("message", message);
  //   } else {
  //     io.emit("message", message);
  //   }
  // });
  socket.on("disconnect", () => {
    console.log("Disconnected.");
  });

  socket.on("joinRoom", (roomName) => {
    console.log("joining room " + roomName);
    socket.join(roomName);
  });
});

console.log("App is running on port " + port);

// const express = require("express");
// const http = require("http");
// const app = express();
// const server = http.createServer(app);
// const socketServ = require("socket.io");
// const io = socketServ(server);
// io.on("connection", (socket) => {
//   socket.emit("your id", socket.id);
//   socket.on("send message", (body) => {
//     io.emit("message", body);
//   });
// });
// const port = process.env.PORT || 5000;
// server.listen(port, () => console.log(`Listening on port:${port}...`));
