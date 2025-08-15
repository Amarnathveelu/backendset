const express = require('express')
const app= express()
const port = 7000

app.get('/',(req,res)=>{
  res.send('server')  
})

app.listen(port ,()=>{
    console.log(`this running port on ${port}`)
})