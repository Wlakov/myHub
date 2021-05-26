const dbConn = require('pz3.9/config/db.config.js');

const Transport = function(transport){
    this.transport = transport.transport;
    this.weight = transport.weight;
};
Transport.create = function (newTrans, result) {
    dbConn.query("INSERT INTO transport set ?", newTrans, function (err, res) {
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
Transport.findById = function (idTrans, result) {
    dbConn.query("Select * from transport where idtrans = ? ", idTrans, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
Transport.findAll = function (result) {
    dbConn.query("Select * from transport", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Transport : ', res);
            result(null, res);
        }
    });
};
Transport.update = function(id,Transport, result){
    dbConn.query("UPDATE Transport SET transport=?,weight=? WHERE idtrans = ?", [transport,weigth, idtrans], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
Transport.delete = function(id, result){
    dbConn.query("DELETE FROM transport WHERE idtrans = ?", [idtrans], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports= Transport;