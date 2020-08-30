require('dotenv').config();

const mongoose = require('mongoose');
const express=require('express');
const app=express();
const bodyParser= require('body-parser');
const cookieParser =require('cookie-parser');
const cors = require('cors');
const webpush = require('web-push');
const Agenda = require('agenda');

// Routes
const authRoutes=require("./routes/auth")
const userRoutes=require("./routes/user");
const subscriberRoutes = require("./routes/subscribe");
const eventRoutes = require("./routes/events");
const articleRoutes=require("./routes/article")
const discussionRoutes=require("./routes/discussion")
const categoryRoutes =require("./routes/category")
const resourceRoutes =require("./routes/resources")


// Webpush initialize with keys
webpush.setVapidDetails('mailto:massmenon@gmail.com',process.env.publicKey,process.env.privateKey);     


// Database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify: false 
}).then(()=>{
    console.log("DB connected");
    setIndexes();
});

// Initiate Job services (Agenda)
let agenda = new Agenda({db: {address : process.env.DATABASE, collection:'dailyQueue', 
processEvery : '5 minutes', options : {useNewUrlParser: true, useUnifiedTopology: true}}});
agenda.start();
require('./jobs/notification')(agenda);
app.agenda = agenda;


// Set Indexes for Agenda Collection
const setIndexes = async () => {
    let agendaSchema = new mongoose.Schema({},{collection:'dailyQueue', strict:false});
    let agendaModel = mongoose.model('dailyQueue',agendaSchema);
    let indexes = await agendaModel.collection.getIndexes();
    // console.log(indexes);
    if(!('user_event' in indexes)){
        await agendaModel.collection.createIndex({"data.eventId":1,"data.userId":1},{name:'user_event',sparse:'true'});
    }
};



//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",subscriberRoutes);
app.use("/api",eventRoutes);
app.use("/api",articleRoutes);
app.use("/api",categoryRoutes);
app.use("/api",resourceRoutes);
app.use("/api",discussionRoutes);





const port=process.env.PORT|| 8000;


app.listen(port,()=>{
    console.log(`app :${port}`);
});