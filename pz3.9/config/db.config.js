const mysql = require('mysql2');
const dbConn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Rusikgomosex',
    database:'novaposhta'
});

dbConn.connect(function (err){
    if(err) throw err;
    console.log("DB Connected");
});
module.exports=dbConn;