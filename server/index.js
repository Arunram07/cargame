const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

io.on("connection", (socket) => {
  console.log("user connected");
});

httpServer.listen(3000);
