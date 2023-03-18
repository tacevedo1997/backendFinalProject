const mongoose = require("mongoose");
require('dotenv').config();


const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_CONNECT)
        console.log("DB connected")
    } catch (error) {
        console.log("unable to connect with DB")
    }
}

module.exports = {connect}