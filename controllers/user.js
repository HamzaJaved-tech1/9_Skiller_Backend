const { AspNetUsers } = require("../models");

async function getAllUsers(req, res) {
  try {
    const users = await AspNetUsers.findAll();
    res.send(users);
  } catch (err) {
    console.error("Unable to get users", err);
  }
}

module.exports = { getAllUsers };
