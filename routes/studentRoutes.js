const express = require("express");
const router = express.Router();

const {createStudent} = require("../controllers/studentControllers");

router.post("/", createStudent);

module.exports = router;