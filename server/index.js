const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");



const app = express();
app.use(express.json());
const port = 9000;
dotenv.config();



// //Set proxy
app.set("trust proxy", 1);


app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

//Supress DeprecationWarning message
mongoose.set("strictQuery", true);

//Database connection (MongoDB Atlas)
const dbConnect = async() => {
    await mongoose
        .connect(process.env.DATABASE)
        .then(() => {
            console.log("Database Connected Successfully");
        })
        .catch((err) => {
            throw err;
        });
};


app.get("/", (req, res) => {
res.send("Hello World!");
});

//Routes for our API endpoints
// app.use("/users", require("./routes/userRoutes.js"));
// app.use("/session", require("./routes/sessionRoutes.js"));

app.use("/food", require("./routes/caloriesRoutes.js"))
//Running the server
const server = app.listen(port, () => {
dbConnect();
console.log(`Server listening on port ${port}`);
});
module.exports = server;