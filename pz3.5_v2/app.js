'use strict'
const express = require('express');
const bodyparser= require('body-parser');
const hbs = require('handlebars');
const app =express();
const port =process.env.PORT || 5000;
app.use (bodyparser.urlencoded({extended:true}))

app.use(bodyparser.json())

app.get('/',(req,res)=>{
    res.send("Hello world");
});

const militaryRoutes=require('./src/routes/militaries.routes.js');

app.use('/api/v1/militaries',militaryRoutes)


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})






//http://localhost:5000