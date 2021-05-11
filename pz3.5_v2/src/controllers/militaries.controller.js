'use strict';

const Military = require('../models/militaries.model.js');

exports.findAll=function (req,res){
    Military.findAll(function (err,military){
        console.log('military controller')
        if (err)
            res.send(err);
        console.log('res', military);
        res.send(military);
    });
};
exports.create = function(req, res) {
    const new_military = new Military(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Military.create(new_military, function(err, military) {
            if (err)
                res.send(err);
            res.json({error:false,message:"Military added successfully!",data:military});
        });
    }
};

exports.findById = function(req, res) {
    Military.findById(req.params.id, function(err, military ) {
        if (err)
            res.send(err);
        res.json(military);
    });
};
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Military.update(req.params.id, new Military(req.body), function(err, military) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Military successfully updated' });
        });
    }
};
exports.delete = function(req, res) {
    Military.delete( req.params.id, function(err, military) {
        if (err)
            res.send(err);
        res.json({ error:false, message: 'Military successfully deleted' });
    });
};
