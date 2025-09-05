const express = require("express");
const userData = require("./userData");
const UserActivationRouter = require("./Routes/UserActivityRoute");
const HomeRouter = require("./Routes/HomeRoute");
const { homeResponse, aboutResponse } = require("./Controllers/HomeController");
const { getAllUsers, getUserByGender, getUserByFirstName } = require("./Controllers/UserActivityController");
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

// ACTIVITY ROUTEs
// server.use supports all the GET, POST, PUT, DELETE
server.use("/api/v1/users", UserActivationRouter);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// nodejs 
// common js -> require(' ') -> to import 
// common js -> module.exports = { } -> to export

// reactjs, js, angular, vuejs 
// es6 -> export { } -> to export
// es6 -> import { } from ' ' -> to import
