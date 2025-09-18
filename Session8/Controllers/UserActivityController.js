const userData = require("../userData");


function getAllUsers(req, res) {
    res.status(200).json(userData);
}

function getUserByGender(req, res) {
  const params = req.query;
  const searchedGender = params.gender;

  const filteredUsers = userData.data.filter(
    (user) => user.gender === searchedGender
  );

    res.status(200).json({ data: filteredUsers, size: filteredUsers.length });
}

function getUserByFirstName(req, res) {
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
}

module.exports = { getAllUsers, getUserByGender, getUserByFirstName };