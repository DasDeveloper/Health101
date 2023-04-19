const express = require("express");
const router = express.Router();
const Food = require('../models/food.js')

router.get("/:foodName", async (req, res) =>{

    const foodName = req.params.foodName;
    const food = await Food.find({name:foodName}).then( food =>{
        if(food){
            res.json(food);
        }
        else{
            res.json({message: "Unable to find food."})
        }
    })

})

router.post('/foodName', async (req, res) =>{

    const {name, calories, serving} = req.body;

    if (!name || ! calories || !serving) {
        return res.status(400).json({ message: "Please fill out all fields!" });
    }

    const dish = {name:name, calories:calories, serving:serving};
    const newFood = Food.create(dish);

    if(newFood){
        return res.send("Successfully created a new food.");
    }
    else{
        return res.send("Unable to create new food.")
    }
})

module.exports = router;
