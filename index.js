/* eslint-disable no-undef */
require("dotenv").config();
const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const socketIO = require("socket.io");
// db connection and route
const DbConnection = require("./config/DbConnection");
const authRoute = require("./routes/api/v1/auth.route");
const userRoute = require("./routes/api/v1/user.route");
const postRoute = require("./routes/api/v1/post.route");
const categoryRoute = require("./routes/api/v1/category.route");

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static("views"));

// create server
const server = http.createServer(app);

// Port
const port = process.env.PORT || 5000 || 6000 || 9000;

// ===================================//
//      Connect TO MONGOODB           //
//====================================//
DbConnection();

// ===================================//
//        SERVER / API ROUTES         //
//====================================//
// apiRoute()
app.use("/api/v1/auth", authRoute); // authentication route
app.use("/api/v1/user", userRoute); // user route
app.use("/api/v1/category", categoryRoute); // category route
app.use("/api/v1/post", postRoute); // post route

// // ===================================//
// //      setup socket IO Server        //
// //====================================//
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (data) => {
    console.log("Received message:", data);
    // Handle the received message

    // Emit a custom event to the connected clients
    io.emit("customEvent", "This is a custom event");
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
    // Clean up resources or perform other necessary tasks
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
