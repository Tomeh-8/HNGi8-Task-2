const mongoose = require("mongoose");
const {Schema, model} = mongoose;


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }   
});

userModel = model("users", userSchema);

module.exports = userModel;