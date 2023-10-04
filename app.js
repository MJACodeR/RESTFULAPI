const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routers = require('./routers/routers');
const connectDB = require("./db/conn");
mongoose.set("strictQuery", true);

const config = require('dotenv');

config.config({path:"./config/config.env"})

app.use(express.json());
app.use(routers);

connectDB();


app.use(express.urlencoded({ extended: true }));


app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`);
});




