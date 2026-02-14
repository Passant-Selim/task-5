const mongoose = require("mongoose");
const mongo_url = process.env.MONGO_URL

async function dbConnection () {
    await mongoose.connect(mongo_url);
    console.log("db is connected");
}

dbConnection();