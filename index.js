const express = require('express');
const app= express();
const port = 7000;
const mongoose = require('./config/db');
const UserRoutes = require('./routes/UserRoutes');

app.get('/',(req,res)=>{
  res.send('server') 
  res.send('my new server setup') 
})


app.use('/api/user',UserRoutes)

app.listen(port ,()=>{
    console.log(`this running port on ${port}`)
})