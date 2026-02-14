const ClassRoom = require("../models/ClassRoom");

const createClass = async (req, res) => {
    try {
        const { name, students } = req.body;
        const classRoom = await ClassRoom.create({ name, students });
        const populatedClass = await classRoom.populate('students');

        res.status(201).json({
            name: classRoom.name,
            students: populatedClass
        });
    } catch (error) {
        console.log(error);
    }
}

const getClass = async (req, res) => {
    try {
        const classRooms = await ClassRoom.find().populate("students", "name");

        res.status(200).json({
            msg: "get classes",
            data: classRooms
        });
    } catch (error) {
        console.log(error);
    }
}


module.exports = { createClass, getClass };