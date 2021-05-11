let express = require("express")
let sequelize = require("sequelize");
let mysql=require("mysql2");
let bodyParser=require("body-parser")
let app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

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



app.set("view engine", "hbs");
app.use(bodyParser.json());
app.use(express.static(__dirname));



app.get("/", function(req, res){
    Military.findAll().then(data=>{
        res.render("index.hbs", {
            military: data
        });
    }).catch(err=>console.log(err));
});

app.get("/indexunit", function(req, res){
    Unit.findAll({raw:true}).then(data=>{
        res.render("indexunit.hbs", {
            unit: data
        });
    }).catch(err=>console.log(err));
});


app.get("/create", function(req, res){
    res.render("create.hbs");
});

app.get ("/createunit",function (req,res){
    res.render("createunit.hbs");
})
app.post("/createunit",urlencodedParser,function (req,res){
   if(!req.body) return res.sendStatus(400);

   const nameofunit=req.body.nameofunit;
   Unit.create({nameofunit: nameofunit})
       .then(()=>{
           res.redirect("/indexunit");
       }).catch(err=>console.log(err));
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
        res.redirect("/indexunit");
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
        res.redirect("/indexunit");
    }).catch(err=>console.log(err));
})













//http://localhost:8080/
