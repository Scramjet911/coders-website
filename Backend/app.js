require('dotenv').config();

const mongoose = require('mongoose');
const express=require('express');
const app=express();
const bodyParser= require('body-parser');
const cookieParser =require('cookie-parser');
const cors = require('cors');

//my routes
const authRoutes=require("./routes/auth")
const userRoutes=require("./routes/user");


//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB connected")
});

//middlewares

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api",authRoutes);
app.use("/api",userRoutes);


const port=process.env.PORT|| 8000;


app.listen(port,()=>{
    console.log(`app :${port}`);
});