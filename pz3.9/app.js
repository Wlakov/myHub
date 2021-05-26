const express = require('express');
const hbs=require('hbs');
const path=require('path')
let app = express();
app.use(express.static(path.join(__dirname, 'public')));


let port = process.env.PORT || 3000;

app.set("view engine","hbs");

app.get('/',(req, res) => res.render('index.hbs'));



hbs.registerHelper("getTime", function(){

    let myDate = new Date();
    let hour = myDate.getHours();
    let minute = myDate.getMinutes();
    let second = myDate.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    return "Поточний час: " + hour + ":" + minute + ":" + second;
});





app.listen(port,function (){
    console.log(`Client-server is working on port `+port);
})




//http://localhost:3000/