
//http://localhost:3000/

const express = require('express');
let app = express();
const mysql = require('mysql2');
const redis =require('redis');
const client = redis.createClient(6379,'127.0.0.1');

client.on("error",(err)=>{
    console.log(err);
})

client.get('a',(err, info)=>{
    console.log(info);
})
let conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Rusikgomosex',
    database:'Cadets'
});


let port = process.env.PORT || 3000;

app.listen(port,function (){
    console.log(`Client-server is working on port `+port);
})

app.set("view engine", "hbs");

app.get('/',(req, res) => {
    conn.query("Select * from cadets",function (err,data){
        if(err) return console.log(err);
        res.render('firstpage.hbs',{
            cadets:data
        })
    });
});

app.get('/cache',(req, res) => {
    const cadets = 'cadets';

    try{
        client.get(cadets, async (err,info)=>{
            if(err) throw err;
            if(info){
                res.render('firstpage.hbs',{
                    cadets: JSON.parse(info),
                });
            }
            else {
                conn.query("Select * from cadets",function (err,data){
                    if(err) return console.log(err);

                    client.set(cadets, JSON.stringify(data));

                    res.render('firstpage.hbs',{
                        cadets:data
                    })
                });


            }
        });
    }catch (err){
        res.status(500).send({message:err.message});
    }
})



