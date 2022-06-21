const express = require("express");
const router = express.Router();

const { addNewProfile } = require("../controllers/profile");

router.post("/", addNewProfile);

module.exports = router;
