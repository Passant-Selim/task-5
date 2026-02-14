require("dotenv").config();
require("./db/database");

const express = require("express");
const app = express();

app.use(express.json());

const student = require("./routes/studentRoutes");
const classRoom = require("./routes/classRoutes");

app.use("/api/students", student);
app.use("/api/classrooms", classRoom);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})