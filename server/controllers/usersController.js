const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");


const createUser = asyncHandler(async(req, res) => {
    const { firstname, lastname, email, password, role } = req.body;

    // Checking if all fields are filled.
    if (!firstname || !lastname || !email || !password || !role) {
        return res.status(400).json({ message: "Please fill out all fields!" });
    }

    // Checks if a duplicate user exists on the database
    const isThereADuplicate = await User.findOne({ email }).lean().exec();
    if (isThereADuplicate) {
        return res
            .status(409)
            .json({ message: "A user with this email already exists." });
    }

    // Hashing passwords to encrypt user data
    const saltRounds = 10;
    const hashPwd = await bcrypt.hash(password, saltRounds);
    const userDocument = { firstname, lastname, email, password: hashPwd, role, preferences: { category: " ", location: " ", work_type: " " } };
    const newUser = await User.create(userDocument);

    if (newUser) {
        res
            .status(201)
            .json({ message: "User successfully created!", id: newUser._id });
    } else {
        res.status(400).json({ message: "User unsuccessfully created." });
    }
});


// This action is to verify the credentials of the user when logging in
const verifyUser = async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
        const userSession = {
            email: user.email,
            user_id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            role: user.role,
        };
        req.session.user = userSession;
        // console.log(`Found user ${user.email}`);
        res.status(200).json({ message: "login successful", userSession });
    } else {
        return res.status(401).json({ message: "Incorrect password" });
    }
};

module.exports = {
    createUser,
    verifyUser,
};