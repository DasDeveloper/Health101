const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    name: {
        type: String
    },
    calories: {
        type: Number
    },
    serving:{
        type: Number

    },
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;