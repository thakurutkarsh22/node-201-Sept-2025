const express = require("express");
const userData = require("./userData");
const UserActivationRouter = require("./Routes/UserActivityRoute");
const HomeRouter = require("./Routes/HomeRoute");
const { homeResponse, aboutResponse } = require("./Controllers/HomeController");
const { getAllUsers, getUserByGender, getUserByFirstName } = require("./Controllers/UserActivityController");
const { mongoose } = require("mongoose");
const server = express();
const PORT = 8089;


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



server.use("/api/v1/users", UserActivationRouter);


// DB CONNECTION 
mongoose.connect("mongodb://localhost:27017/Crio-sept").then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB", err);
});

// SERVER LISTENING
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
