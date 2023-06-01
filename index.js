/* eslint-disable no-undef */
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connection = require("./config/connection");
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

// Port
const port = process.env.PORT || 5000 || 6000 || 9000;

// ===================================//
//      Connect TO MONGOODB           //
//====================================//
connection();

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
