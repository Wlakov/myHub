/*
let dbConn=require('D:\\Documents\\Projects\\trpz\\pz3.5_v2\\configs\\configMysql.js');

let Unit= function (units){

    this.nameofunit=units.nameofunit;
}

Unit.create=function (newMil,result){
    dbConn.query("INSERT INTO units set ?",newMil,function (err,res){
        if(err){
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Unit.findById=function (id,result){
    dbConn.query("SELECT * FROM units WHERE unitId = ?",id,function (err,res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Unit.findAll=function (result){
    dbConn.query("SELECT * FROM units",function (err,res){
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('units : ', res);
            result(null, res);
        }
    });
};

Unit.update = function (id,unit,result){
    dbConn.query("UPDATE units SET nameofunit=?, WHERE unitId=?",
        [unit.nameofunit],
        function (err,res){
            if(err) {
                console.log("error: ", err);
                result(null, err);``
            }else{
                result(null, res);
            }
        });
};
Unit.delete=function (id,result){
    dbConn.query("DELETE FROM units WHERE unitId=?",[unitId],function(err,res){
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = Unit;*/
