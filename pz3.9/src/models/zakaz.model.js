const dbConn = require('pz3.9/config/db.config.js');

const Zakaz = function(zakaz){
    this.nameofper = zakaz.nameofper;
    this.lastnameofper = zakaz.lastnameofper;
    this.tnper=zakaz.tnper;
};
Zakaz.create = function (newZakaz, result) {
    dbConn.query("INSERT INTO zakaz set ?", newZakaz, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Zakaz.findById = function (idzakaz, result) {
    dbConn.query("Select * from zakaz where idzakaz = ? ", idzakaz, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
Zakaz.findAll = function (result) {
    dbConn.query("Select * from zakaz", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Zakaz : ', res);
            result(null, res);
        }
    });
};
Zakaz.update = function(id, Zakaz, result){
    dbConn.query("UPDATE zakaz SET dateofper=?,km=?,weigthofvan=?,cost=? WHERE idzakaz = ?", [dateofper,km,weightofvan,cost,idzakaz], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
Zakaz.delete = function(id, result){
    dbConn.query("DELETE FROM zakaz WHERE idzakaz = ?", [idzakaz], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= Zakaz;