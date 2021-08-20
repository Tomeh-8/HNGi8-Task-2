const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

//connect to mongoDB
const url = process.env.MONGO_URI;
mongoose.connect(url,
    {useNewUrlParser: true, useFindAndModify: true, useCreateIndex: true,useUnifiedTopology: true},
     (err) => {
        if(err)  throw err;
        console.log("database connected!")
     }
    );

//Middleware
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(express.urlencoded({extended: true}));

//Route
app.use("/", require("./route/userRoute"));

//listen to port
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server running on port: ${port}`))