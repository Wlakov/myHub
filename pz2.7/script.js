let fs = require('fs');
let path = 'D:\\Documents\\ProjectX\\capital_country.csv';
let parse = require('csv-parse');
let rl= require('readline');
let pathofnewfile='D:\\Documents\\ProjectX\\data.js'

const readline=rl.createInterface({
    input:process.stdin,
    output:process.stdout
});
/*
let promise= new Promise(function (resolve){
    readline.question('Type name of your file ',answer => {
        resolve(answer);
    })
*/

function newFile (newFileName) {
    fs.open(__dirname + '/' + newFileName,'w', (err) => {
            if (err) {
                console.log("\n\nУпссс...\n\n");
            }
            console.log('Файл створений');
        })
    }
    //readline.close();

newFile('data');
const result=[];
let promise = new Promise(function (resolve, reject){
    fs.createReadStream(path)
        .pipe(parse())
        .on('data',(data)=>result.push(data))
        .on('end',()=>{
            fs.createWriteStream(pathofnewfile)
            .on('error', function(err) { Console.log(err) });
            result.forEach(value => .write(`${value}\r\n`));
            .end();
        });
})





