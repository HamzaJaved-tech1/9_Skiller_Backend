const { Profile } = require("../models");
const jwt = require("jsonwebtoken");
const { v4: uuidV4 } = require("uuid");

async function addNewProfile(req, res) {
  try {
    const {
      DOB,
      Age,
      IsActive,
      IsDeleted,
      IsFirstLogin,
      Username,
      Email,
      Password,
    } = req.body;

    if (Email.trim() === "") {
      return res.send("Email cannot be empty");
    }

    if (Username.trim() === "") {
      return res.send("Username cannot be empty");
    }

    if (Password.trim() === "") {
      return res.send("Password cannot be empty");
    }

    const user = await Profile.findOne({ where: { Email } });

    if (user) {
      return res.send("User already exists");
    }

    const SECRET_TEXT = "Something secret";

    const addUser = await Profile.create({
      Id: uuidV4(),
      DOB,
      Age,
      IsActive,
      IsDeleted,
      IsFirstLogin,
      Username,
      Email,
      Password,
    });

    const token = jwt.sign(
      {
        Email: addUser.Email,
        Username: addUser.Username,
      },
      SECRET_TEXT,
      { expiresIn: "1h" }
    );

    const response = {
      id: addUser.dataValues.Id,
      username: addUser.dataValues.Username,
      email: addUser.dataValues.Email,
      token,
    };
    res.send(response);
  } catch (err) {
    res.send(err);
  }
}

module.exports = { addNewProfile };
