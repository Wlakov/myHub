const dbConn=require('D:\\Documents\\Projects\\trpz\\pz3.5_v2\\configs\\configMysql.js');

let Military= function (military){
    this.milId= military.milId;
    this.nameofmil=military.nameofmil;
    this.lastname=military.lastname;
    this.fathername=military.fathername;
    this.rankof= military.rankof;
    this.dob=military.dob;
}

Military.create=function (newMil,result){
    dbConn.query("INSERT INTO militaries set ?",newMil,function (err,res){
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

Military.findById=function (id,result){
    dbConn.query("SELECT * FROM militaries WHERE milId = ?",id,function (err,res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Military.findAll=function (result){
    dbConn.query("SELECT * FROM militaries",function (err,res){
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

Military.update = function (milId,military,result){
    dbConn.query("UPDATE militaries SET nameofmil=?,lastname=?,fathername=?,rankof=?,dob=?, WHERE milId=?",
        [military.nameofmil,military.lastname,military.fathername,military.rankof,military.dob,milId],
        function (err,res){
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }else{
                result(null, res);
            }
    });
};
Military.delete=function (milId,result){
    dbConn.query("DELETE FROM militaries WHERE milId = ?",[milId],function(err,res){
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = Military;