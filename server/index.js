const app = require("express")();
const httpServer = require("http").createServer(app);

const cors = require("cors");

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.emit("newuser", { id: socket.id });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });

  socket.on("update", (data) => {
    socket.emit("updateSpeed", { speedData: data.speed });
  });
});

httpServer.listen(5000, () => console.log("server running"));
