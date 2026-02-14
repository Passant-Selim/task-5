const express = require("express");
const router = express.Router();

const {createClass, getClass} = require("../controllers/classControllers");

router.post("/", createClass);
router.get("/", getClass);

module.exports = router;