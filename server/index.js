const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require("express-session");
const cors = require("cors");
const User = require("./models/user");
const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();
app.use(express.json());
const port = 9000;
dotenv.config();

//Session length
const session_length = 1000 * 60 * 60;

//Set proxy
app.set("trust proxy", 1);

//MongoDB seission store
const mongoDBstore = new MongoDBStore({
    uri: process.env.DATABASE,
    collection: "userSessions",
});

app.use(
    session({
        secret: "secret123",
        name: "user_session_id",
        store: mongoDBstore,
        cookie: {
            maxAge: session_length,
            sameSite: false,
            secure: true,
        },
        resave: true,
        saveUninitialized: false,
    })
);

app.use(
    cors({
        origin: "https://localhost:9000",
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
app.use("/users", require("./routes/userRoutes.js"));
app.use("/session", require("./routes/sessionRoutes.js"));
app.use("/food", require("./routes/caloriesRoutes.js"))
//Running the server
const server = app.listen(port, () => {
dbConnect();
console.log(`Server listening on port ${port}`);
});
module.exports = server;