const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    name: {
        type: String
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }]
});


const ClassRoom = mongoose.model("ClassRoom", classSchema);

module.exports = ClassRoom;