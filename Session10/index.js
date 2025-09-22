const express = require("express");
const userData = require("./userData");
const UserActivityRouter = require("./Routes/UserActivityRoute");
const HomeRouter = require("./Routes/HomeRoute");
const BlogsRouter = require("./Routes/BlogsRoute");
const UserRoute = require("./Routes/UserRoute");
const AuthRoute = require("./Routes/AuthRoute");
const { mongoose } = require("mongoose");
const server = express();
const PORT = 8089;

const dotEnv = require("dotenv");
dotEnv.config();



// MIDDLEWARE
// this is a body parser
server.use(express.json());


server.use("/", HomeRouter);


server.get("/fitness", (req, res) => {
  const fitnessData = {
    name: "John Doe",
    age: 30,
    height: "6ft",
    weight: "180lbs",
    goals: ["Build muscle", "Lose fat", "Improve endurance"],
    shouldSleep8Hours: true,
  };

  res.status(200).json(fitnessData);
});



server.use("/api/v1/users", UserActivityRouter);

server.use("/api/v1/blog", BlogsRouter);


server.use("/api/v2/users", UserRoute);


server.use("/api/v2/auth", AuthRoute);


// DB CONNECTION 
const DBURL = process.env.DB_URL_DEV;
mongoose.connect(DBURL).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB", err);
});

// SERVER LISTENING
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// dot env
/**
 * 1. hides the secret form the server 
 * 2. we can make it as env variable
 */
