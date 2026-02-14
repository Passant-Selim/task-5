const Student = require("../models/Student");

const createStudent = async (req, res) => {
    try {
        const {name} = req.body;
        const student = await Student.create({name});

        res.status(201).json({
        msg: "student is created",
        data: student
    }); 
    } catch (error) {
        console.log(error);
    }
}


module.exports = {createStudent}