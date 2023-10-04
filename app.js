const express = require("express");
const app = express();
const routers = require('./routers/routers');
const connectDB = require("./db/conn");

const config = require('dotenv');

config.config({path:"./config/config.env"})

app.use(express.json());
app.use(routers);

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`);
});




