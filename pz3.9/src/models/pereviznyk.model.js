const dbConn = require('pz3.9/config/db.config.js');

const Pereviznyk = function(pereviznyk){
    this.nameofper = pereviznyk.nameofper;
    this.lastnameofper = pereviznyk.lastnameofper;
    this.tnper=pereviznyk.tnper;
};
Pereviznyk.create = function (newPer, result) {
    dbConn.query("INSERT INTO Pereviznyk set ?", newPer, function (err, res) {
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
Pereviznyk.findById = function (idper, result) {
    dbConn.query("Select * from Pereviznyk where idper = ? ", idper, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
Pereviznyk.findAll = function (result) {
    dbConn.query("Select * from Pereviznyk", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Pereviznyk : ', res);
            result(null, res);
        }
    });
};
Pereviznyk.update = function(id, Pereviznyk, result){
    dbConn.query("UPDATE Pereviznyk SET nameofper=?,lastnameofper=?,tnper=? WHERE idper = ?", [nameofper,lastnameofper,tnper, idper], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
Pereviznyk.delete = function(id, result){
    dbConn.query("DELETE FROM Pereviznyk WHERE idper = ?", [idper], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= Pereviznyk;