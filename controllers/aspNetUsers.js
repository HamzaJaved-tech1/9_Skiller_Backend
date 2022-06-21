const { AspNetUsers } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4: uuidV4 } = require("uuid");

async function addNewAspNetUser(req, res) {
  try {
    const { UserName, Email, Password } = req.body;

    if (Email.trim() === "") {
      return res.send("Email cannot be empty");
    }

    if (UserName.trim() === "") {
      return res.send("UserName cannot be empty");
    }

    if (Password.trim() === "") {
      return res.send("Password cannot be empty");
    }

    const user = await AspNetUsers.findOne({ where: { Email } });

    if (user) {
      return res.send("User already exists");
    }

    const SECRET_TEXT = "Something secret";

    const PasswordHash = await bcrypt.hash(Password, 12);

    const addUser = await AspNetUsers.create({
      Id: uuidV4(),
      UserName,
      NormalizedUserName: UserName.toUpperCase(),
      Email,
      NormalizedEmail: Email.toUpperCase(),
      PasswordHash,
      EmailConfirmed: false,
      PhoneNumberConfirmed: false,
      TwoFactorEnabled: false,
      LockoutEnabled: true,
      AccessFailedCount: 0,
    });

    const token = jwt.sign(
      {
        Email: addUser.Email,
        UserName: addUser.UserName,
      },
      SECRET_TEXT,
      { expiresIn: "1h" }
    );

    const { Id: id, UserName: username, Email: email } = addUser.dataValues;

    const response = {
      id,
      username,
      email,
      token,
    };
    res.send(response);
  } catch (err) {
    res.send(err);
  }
}

async function getAllUsers(req, res) {
  const users = await AspNetUsers.findAll();
  res.send(users);
}

module.exports = { addNewAspNetUser, getAllUsers };
