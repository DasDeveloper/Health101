const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    calorieCount: {
        type: Number
    },
    calorieSet: {
        type: Number
    },
    addedFoods: []
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;