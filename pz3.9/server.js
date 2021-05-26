const express=require('express');
let server = express();
let port = process.env.PORT || 3001;

server.get('/',(req, res) => res.send("Hello world"));


server.listen(port,function (){
    console.log("Server is working");
});


//http://localhost:3001