const dbConn = require('pz3.9/config/db.config.js');

const Zamovnyk = function(zamovnyk){
    this.nameofzam = zamovnyk.nameofzam;
    this.lastnameofzam = zamovnyk.lastnameofzam;
    this.tnzam=zamovnyk.tnzam;
};
Zamovnyk.create = function (newZam, result) {
    dbConn.query("INSERT INTO zamovnyk set ?", newZam, function (err, res) {
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
Zamovnyk.findById = function (idzam, result) {
    dbConn.query("Select * from zamovnyk where idzam = ? ", idzam, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
Zamovnyk.findAll = function (result) {
    dbConn.query("Select * from zamovnyk", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Zamovnyk : ', res);
            result(null, res);
        }
    });
};
Zamovnyk.update = function(id, Zamovnyk, result){
    dbConn.query("UPDATE zamovnyk SET nameofzam=?,lastnameofzam=?,tnzam=? WHERE idzam = ?", [nameofzam,lastnameofzam,tnzam, idzam], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
Zamovnyk.delete = function(id, result){
    dbConn.query("DELETE FROM zamovnyk WHERE idzam = ?", [idzam], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= Zamovnyk;