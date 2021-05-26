let express = require("express")
let sequelize = require("sequelize");
let mysql=require("mysql2");
let mongo= require('mongodb').MongoClient;
let bodyParser=require("body-parser")
let app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});



let connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"oblik",
    password:"Rusikgomosex",
    multipleStatements: true
});

let seq= new sequelize("oblik","root","Rusikgomosex",{
    dialect:"mysql",
    host:"localhost",
    define:{
        timestamps:false
    }
});

const Military = seq.define("military",{
    milId:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    nameofmil:{
        type:sequelize.STRING
    },
    lastname:{
        type:sequelize.STRING
    },
    fathername:{
        type:sequelize.STRING
    },
    rankof:{
        type:sequelize.STRING
    },
    dob:{
        type:sequelize.DATEONLY
    }
});
const Unit = seq.define("unit",{
    unitId:{
        type:sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nameofunit:{
        type:sequelize.STRING
    }
});
const Milpos = seq.define("milposition",{
    Id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nameofpos:{
        type:sequelize.STRING
    }
});
Military.hasOne(Milpos);
Unit.hasMany(Milpos);


seq.sync().then(()=>{
    app.listen(8080, function(){
        console.log("Working...");
    });
}).catch(err=>console.log(err));

const mongoose=require('mongoose');
const schema=mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/oblik",{ useUnifiedTopology: true, useNewUrlParser: true });
const milSchema=new schema({
    nameofmil:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    },
    lastname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    fathername: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    rankof:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    },
    dob: {
        type: Date,
        required: true,
    }
});
const military=mongoose.model("military",milSchema);
const unitSchema=new schema({
    nameofunit:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    }
});
const unit=mongoose.model("unit",unitSchema);


const posSchema=new schema({
    nameofpos:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    },
    militaryMilId:{
        type:Number,
        required:false,
        min:1,
        max:1000
    },
    unitUnitId: {
        type: Number,
        required: false,
        min: 1,
        max: 1000
        }
});
const milposition=mongoose.model("milposition",posSchema);

app.set("view engine", "hbs");
app.use(bodyParser.json());
/*app.use(express.static(__dirname));*/



app.get("/", function(req, res){
    connection.query("select * from militaries", function(err, data) {
        if(err) return console.log(err);
        res.render("indexmil.hbs", {
            militaries:data
        });
    });
});
app.get("/testindex", function(req, res){
    connection.query("select * from militaries,units,milpositions where militaryMilId=milId and unitUnitId=unitId;", function(err, data) {
        if(err) return console.log(err);
        res.render("testindex.hbs", {
            militaries:data
        });
    });
});

app.get("/posindex", function(req, res){
    connection.query("select * from milpositions", function(err, data) {
        if(err) return console.log(err);
        res.render("posindex.hbs", {
            milpositions:data
        });
    });
});app.get("/indexunit", function(req, res){
    connection.query("select * from units", function(err, data) {
        if(err) return console.log(err);
        res.render("indexunit.hbs", {
            units:data
        });
    });
});

app.get("/create", function(req, res){
    res.render("create.hbs");
});

app.get ("/createunit",function (req,res){
    res.render("createunit.hbs");
})

app.get ("/createpos",function (req,res) {
    res.render("createpos.hbs");
});
app.post("/createpos",urlencodedParser,function (req,res){
    if(!req.body) return res.sendStatus(400);
    const nameofpos = req.body.nameofpos;
    const militaryMilId = req.body.militaryMilId;
    const unitUnitId = req.body.unitUnitId;
    connection.query("INSERT INTO milpositions (nameofpos,militaryMilId,unitUnitId) VALUES (?,?,?)", [nameofpos, militaryMilId,unitUnitId], function(err, data) {
        if(err) return console.log(err);
        res.redirect("/testindex");
    });
    milposition.create({nameofpos:nameofpos,militaryMilId:militaryMilId,unitUnitId:unitUnitId}, function(err, doc){
        mongoose.disconnect();

        if(err) return console.log(err);

        console.log("Сохранен объект milposition", doc);
    });
});

app.post("/createunit",urlencodedParser,function (req,res){
   if(!req.body) return res.sendStatus(400);

   const nameofunit=req.body.nameofunit;
   Unit.create({nameofunit: nameofunit})
       .then(()=>{
           res.redirect("/");
       }).catch(err=>console.log(err));
    unit.create({nameofunit:nameofunit}, function(err, doc){
        mongoose.disconnect();

        if(err) return console.log(err);

        console.log("Сохранен объект unit", doc);
    });
});

app.post("/create", urlencodedParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);

    const nameofmil = req.body.nameofmil;
    const lastname = req.body.lastname;
    const fathername = req.body.fathername;
    const rankof = req.body.rankof;
    const dob = req.body.dob;
    Military.create({ nameofmil: nameofmil, lastname: lastname,fathername: fathername,rankof: rankof,dob:dob}).then(()=>{
        res.redirect("/");
    }).catch(err=>console.log(err));
   military.create({ nameofmil: nameofmil, lastname: lastname,fathername: fathername,rankof: rankof,dob:dob}, function(err, doc){
        mongoose.disconnect();

        if(err) return console.log(err);

        console.log("Сохранен объект military", doc);
    });
});


app.get("/edit/:milId", function(req, res){
    const milId = req.params.milId;
    Military.findAll({where:{milId: milId}, raw: true })
        .then(data=>{
            res.render("edit.hbs", {
                military: data[0]
            });
        })
        .catch(err=>console.log(err));
});
app.post("/edit", urlencodedParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);
    const milId=req.body.milId;
    const nameofmil = req.body.nameofmil;
    const lastname = req.body.lastname;
    const fathername = req.body.fathername;
    const rankof = req.body.rankof;
    const dob = req.body.dob;
    Military.update({nameofmil:nameofmil, lastname: lastname,fathername:fathername,rankof:rankof,dob:dob}, {where: {milId: milId} }).then(() => {
        res.redirect("/");
    })
        .catch(err=>console.log(err));
});

app.get("/editunit/:unitId", function(req, res){
    const unitId = req.params.unitId;
    Unit.findAll({where:{unitId: unitId}, raw: true })
        .then(data=>{
            res.render("editunit.hbs", {
                unit: data[0]
            });
        })
        .catch(err=>console.log(err));
});
app.post("/editunit", urlencodedParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);
    const nameofunit = req.body.nameofunit;
    const unitId=req.body.unitId;
    Unit.update({nameofunit:nameofunit}, {where: {unitId: unitId} }).then(() => {
        res.redirect("/");
    })
        .catch(err=>console.log(err));
});
app.get("/editpos/:Id", function(req, res){
    const Id = req.params.Id;
    Milpos.findAll({where:{Id: Id}, raw: true })
        .then(data=>{
            res.render("editpos.hbs", {
                milposition: data[0]
            });
        })
        .catch(err=>console.log(err));
});
app.post("/editpos", urlencodedParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);
    const nameofpos = req.body.nameofpos;
    const Id=req.body.Id;
    Milpos.update({nameofpos:nameofpos}, {where: {Id: Id} }).then(() => {
        res.redirect("/");
    })
        .catch(err=>console.log(err));
});

app.post("/delete/:milId", function(req, res){
    const milId = req.params.milId;
    Military.destroy({where: {milId: milId}}).then(() => {
        res.redirect("/");
    }).catch(err=>console.log(err));
});

app.post("/deleteunit/:unitId",function (req,res){
    const unitId=req.params.unitId;
    Unit.destroy({where: {unitId: unitId}}).then(()=>{
        res.redirect("/");
    }).catch(err=>console.log(err));
})
app.post("/deletepos/:Id",function (req,res){
    const Id=req.params.Id;
    Milpos.destroy({where: {Id: Id}}).then(()=>{
        res.redirect("/");
    }).catch(err=>console.log(err));
})













//http://localhost:8080/
