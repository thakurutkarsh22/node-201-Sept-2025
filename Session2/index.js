const express = require("express");
const userData = require("./userData");
const server = express();
const PORT = 8089;

server.get("/", (req, res) => {
  // send is a method in express only to send response and it sends mostly string and html
  res.status(200).send("Welcome to my fitness pagge Express JS ");
});

server.get("/abouts", (req, res) => {
  res
    .status(200)
    .send("About Us: We are a company that does fitness CRM, DataRAG");
});

server.get("/fitness", (req, res) => {
  const fitnessData = {
    name: "John Doe",
    age: 30,
    height: "6ft",
    weight: "180lbs",
    goals: ["Build muscle", "Lose fat", "Improve endurance"],
    shouldSleep8Hours: true,
  };

  // json is a method in express to send json response
  //   json is setting the content type as application/json automatically
  res.status(200).json(fitnessData);
});

// 1. get all users
server.get("/api/v1/users", (req, res) => {
  res.status(200).json(userData);
});

// 2 get user by gender
// way 1 query params (? in the URL)
server.get("/api/v1/users/search", (req, res) => {
  const params = req.query;
  const searchedGender = params.gender;

  const filteredUsers = userData.data.filter(
    (user) => user.gender === searchedGender
  );
  res.status(200).json({ data: filteredUsers, size: filteredUsers.length });
});

// 3 get user by id
// way 2 params (after : in the url path will be a param)
server.get("/api/v1/users/:firstName", (req, res) => {
  const params = req.params;
  const searchedFirstName = params.firstName;

  const user = userData.data.find(
    (user) => user.name.first === searchedFirstName
  );
  if (user) {
    res.status(200).json({ data: user });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
