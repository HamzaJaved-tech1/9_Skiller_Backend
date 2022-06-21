const express = require("express");
const router = express.Router();

const { addNewAspNetUser, getAllUsers } = require("../controllers/aspNetUsers");

router.post("/", addNewAspNetUser);

router.get("/", getAllUsers);

module.exports = router;
