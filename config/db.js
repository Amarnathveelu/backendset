const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Amarnath:amarnath9345@cluster0.fmism.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",).then(()=>{
    console.log("data base is connected");
}).catch((err)=>{
    console.log(err);
})