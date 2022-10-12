require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const advisorRouter = require('./api/advisor');
const cors = require('cors')
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learnit.cjwrv.mongodb.net/MyDb?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("mongo db connect");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}



connectDB();
const app = express();
app.get("/",(req,res)=>res.send("This is my server"));

app.use(express.json())
app.use(cors())

app.use("/api/advisor", advisorRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`server run on port ${PORT}`))
